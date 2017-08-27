// modules
const express = require('express');
const session = require('express-session');
const ejsLocals = require('ejs-locals');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// my files
const config = require('config');
//const mongoose = require('db/dbinit');
const errorHandler = require('error/errorHandler');
const router = require('controllers');
const Logger = require('logger');
const logger = new Logger();
const runtime = require('middleware/runtime');
const sendHttpError = require('middleware/sendHttpError');

// start
const app = express();

// timer start
app.use(runtime);

// views
app.engine('ejs', ejsLocals);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// public directory
app.use(express.static(path.join(__dirname, '../public')));

// other middleware
app.use(cookieParser());
app.use(session(config.session));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(sendHttpError);

// router
router(app);

// error
errorHandler(app);


// listen
app.listen(config.port, err => {
    if (err) throw err;
    else logger.log(`Running server at port ${config.port}!`);
});