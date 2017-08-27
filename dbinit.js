const Board = require('models').Board;
const Post = require('models').Post;

// create board
/*let query = 'CREATE TABLE b (' +
            'id INT(10) NOT NULL AUTO_INCREMENT UNIQUE,\n' +
            "name VARCHAR(30) NOT NULL DEFAULT 'Anonymous',\n" +
            "theme VARCHAR(30) NOT NULL DEFAULT '',\n" +
            'date DATETIME NOT NULL DEFAULT NOW(),\n' +
            "file VARCHAR(255) NOT NULL DEFAULT '',\n" +
            'text VARCHAR(255) NOT NULL,\n' +
            "thread BOOLEAN NOT NULL DEFAULT 0,\n" +
            'parent INT(10) DEFAULT NULL,\n' +
            'PRIMARY KEY (id))';

db.connection.query("DROP TABLE b", err => {
    if (err) console.log(err);

    db.connection.query(query, err => {
        if (err) {
            console.log('Случилась ошибка(((((');
            console.log(err);
        }
    });
});*/

// create table boardsInfo
/*let query = 'CREATE TABLE boardsInfo (' +
    'id INT(10) NOT NULL AUTO_INCREMENT UNIQUE,\n' +
    'shortName VARCHAR(30) NOT NULL UNIQUE,\n' +
    'fullName VARCHAR(30) NOT NULL UNIQUE,\n' +
    'category VARCHAR(30) NOT NULL,\n' +
    'description VARCHAR(255) NOT NULL,\n' +
    'PRIMARY KEY (id))';

db.connection.query(query, err => {
    if (err) {
        console.log('Случилась ошибка(((((');
        console.log(err);
        return;
    }

    db.connection.query('SHOW TABLES', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});*/

// create board info
/*let query = "INSERT INTO boardsInfo (shortName, fullName, category, description) VALUES('pr', 'Programming', 'Technology and software', '')";
db.connection.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
});*/


/*let query1 = "INSERT INTO b (text, thread) VALUES('Hello darkness, my old friend...', 1)";
db.connection.query(query1, (err, result) => {
    if (err) console.log(err);

    console.log(result);
    let query2 = "UPDATE b SET file='/b/src/" + result.insertId  + "/1493933931305.jpg'";
    db.connection.query(query2, (err, result) => {
        console.log(result);
    });
});*/

/*let query2 = "UPDATE b SET file='1493933931305.jpg' WHERE id=4";
db.connection.query(query2, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});*/

// get posts
/*db.connection.query('SELECT * FROM b', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});*/


/*let query1 = "INSERT INTO b (file, text, thread, parent) VALUES('/b/src/1/noname.jpg', 'This post have one file.', 0, 1)";
db.connection.query(query1, (err, result) => {
    if (err) console.log(err);

    console.log(result);
});*/


/*db.connection.query('SELECT * FROM b WHERE parent=1', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});*/

let b = new Board('b', 'Random', 'Others', 'This is a main board. Post what ever you want.');
/*let vg = new Board('vg', 'Video Games General', 'Video Games', 'All games can be discussed here.');
let pr = new Board('pr', 'Programming', 'Technology and software', 'It is a board about programming and programming languages.');*/

b.destroy()
    .then(() => {
        return b.save();
    })
/*b.save()*/
    .then(() => {
        let post1 = new Post(b.shortName, 'Anonymous', '', '14973674604580.jpg', 'This is my first thread!!!!');
        return post1.save();
    })
    .then(() => {
        let post2 = new Post(b.shortName, 'Darkness', 'Hello', '', 'This is my first post :)))', false, 1);
        return post2.save();
    })
    .then(() => {
        let post3 = new Post(b.shortName, 'Anonymous', 'Testing', 'noname.jpg', 'Hello everyone....:)', false, 1);
        return post3.save();
    })
    .then(() => {
        let post4 = new Post(b.shortName, 'Anonymous', '', '1493933931305.jpg', 'This is my second thread((((9((9(');
        return post4.save();
    })
    .then(() => {
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(2);
    });