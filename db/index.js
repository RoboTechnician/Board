const Logger = require('logger');
const logger = new Logger();
const config = require('config');
const mysql = require('mysql');

const connection = mysql.createConnection(config.mysql);

connection.connect(err => {
    if (err) {
        logger.error("Database Connection Error: " + err);
        process.exit(2);
        return;
    }

    logger.log("Successfully connected to MySQL Database");
});

module.exports = connection;