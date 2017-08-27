const db = require('db');

module.exports = class Board {
    constructor(shortName, fullName, category, description = '', id = null) {
        this.shortName = shortName;
        this.fullName = fullName;
        this.category = category;
        this.description = description;
        this.id = id;
    }

    static _toBoard(obj) {
        return new Board(obj.shortName, obj.fullName, obj.category, obj.description, obj.id);
    }

    save() {
        let board = this;
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO boardsInfo (shortName, fullName, category, description) " +
                "VALUES(?, ?, ?, ?)";
            let values = [board.shortName, board.fullName, board.category, board.description];

            db.query(query, values, (err, result) => {
                if (err) return reject(err);

                board.id = result.insertId;
                resolve();
            });
        })
            .then(() => {
                let query = `CREATE TABLE ${board.shortName} (` +
                    'id INT(10) NOT NULL AUTO_INCREMENT UNIQUE,\n' +
                    "name VARCHAR(30) NOT NULL DEFAULT 'Anonymous',\n" +
                    "theme VARCHAR(30) NOT NULL DEFAULT '',\n" +
                    'date DATETIME NOT NULL DEFAULT NOW(),\n' +
                    "file VARCHAR(255) NOT NULL DEFAULT '',\n" +
                    'text VARCHAR(255) NOT NULL,\n' +
                    "thread BOOLEAN NOT NULL DEFAULT 0,\n" +
                    'parent INT(10) DEFAULT NULL,\n' +
                    'PRIMARY KEY (id))';

                return new Promise((resolve, reject) => {
                    db.query(query, err => {
                        if (err) return reject(err);
                        resolve(board);
                    });
                });
            });
    }

    destroy() {
        let board = this;
        return new Promise((resolve, reject) => {
            db.query(`DROP TABLE ${board.shortName}`, err => {
                if (err) return reject(err);
                resolve();
            });
        })
            .then(() => {
                return new Promise((resolve, reject) => {
                    db.query(`DELETE FROM boardsInfo WHERE shortName = ?`, [board.shortName], err => {
                        if (err) return reject(err);
                        resolve(board);
                    });
                });
            });
    }

    update(shortName = this.shortName, fullName = this.fullName, category = this.category, description = this.description) {
        let board = this;
        let boardName = this.shortName;

        return new Promise((resolve, reject) => {
            let query = 'UPDATE boardsInfo ' +
                'SET shortName = ?, fullName = ?, category = ?, description = ? ' +
                'WHERE shortName = ?';
            let values = [shortName, fullName, category, description, boardName];

            db.query(query, values, err => {
                if (err) return reject(err);

                board.shortName = shortName;
                board.fullName = fullName;
                board.category = category;
                board.description = description;
                resolve();
            });
        })
            .then(() => {
                return new Promise((resolve, reject) => {
                    db.query(`RENAME TABLE ? TO ?`, [boardName, board.shortName], err => {
                        if (err) return reject(err);
                        resolve(board);
                    });
                });
            });
    }

    static getBoards() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM boardsInfo", (err, results) => {
                if (err) return reject(err);

                let boards = [];
                for (let i = 0; i < results.length; i++) {
                    boards.push(Board._toBoard(results[i]));
                }
                resolve(boards);
            });
        });
    }

    static getBoard(board) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM boardsInfo WHERE shortName = ?", [board], (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve(null);

                resolve(Board._toBoard(results[0]));
            });
        });
    }
};