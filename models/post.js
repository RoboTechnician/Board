const db = require('db');

module.exports = class Post {
    constructor(board = null, name = 'Anonymous', theme = '', file = '', text = null, thread = true, parent = null, id = null, date = null) {
        this.board = board;
        this.name = name;
        this.theme = theme;
        this.file = file;
        this.text = text;
        this.thread = thread;
        this.parent = parent;
        this.id = id;
        this.date = date;
    }

    static _toPost(obj) {
        return new Post(obj.board, obj.name, obj.theme, obj.file, obj.text, obj.thread, obj.parent, obj.id, obj.date);
    }

    save() {
        let post = this;
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO ${post.board} (name, theme, date, file, text, thread, parent) ` +
                "VALUES(?, ?, ?, ?, ?, ?, ?)";
            let values = [post.name, post.theme, new Date(), post.file, post.text, post.thread, post.parent];

            db.query(query, values, (err, result) => {
                if (err) return reject(err);

                post.id = result.insertId;
                resolve(post);
            });
        });
    }

    destroy() {
        let post = this;
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM ${post.board} WHERE id = ?`, [post.id], err => {
                if (err) return reject(err);
                resolve(post);
            });
        });
    }

    update(name = this.name, theme = this.theme, file = this.file, text = this.text) {
        let post = this;
        return new Promise((resolve, reject) => {
            let query = `UPDATE ${post.board} ` +
                'SET name = ?, theme = ?, file = ?, text = ? ' +
                'WHERE id = ?';
            let values = [name, theme, file, text, post.id];

            db.query(query, values, err => {
                if (err) return reject(err);

                post.name = name;
                post.theme = theme;
                post.file = file;
                post.text = text;
                resolve(post);
            });
        });
    }

    static getThreads(board) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${board} WHERE thread = 1`, (err, results) => {
                if (err) return reject(err);

                let threads = [];
                for (let i = 0; i < results.length; i++) {
                    results[i].board = board;
                    threads.push(Post._toPost(results[i]));
                }
                resolve(threads);
            });
        });
    }

    static getThread(board, threadId) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${board} WHERE parent = ? OR id = ?`, [threadId, threadId], (err, results) => {
                if (err) return reject(err);

                let posts = [];
                for (let i = 0; i < results.length; i++) {
                    results[i].board = board;
                    posts.push(Post._toPost(results[i]));
                }
                resolve(posts);
            });
        });
    }

    static getPost(board, id) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${board} WHERE id = ?`, [id], (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve(null);

                results[0].board = board;
                resolve(Post._toPost(results[0]));
            });
        });
    }
};