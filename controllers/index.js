module.exports = app => {
    app.use(require('./main'));
    app.use(require('./board'));
};
