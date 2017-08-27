const Logger = require('logger/index');
const logger = new Logger();
const HttpError = require('./HttpError');

module.exports = app => {
    app.use((req, res, next) => {
        next(404)
    });

    app.use((err, req, res, next) => {
        if (typeof err === 'number')
            err = new HttpError(err);

        if (err instanceof HttpError) {
            res.sendHttpError(err);
        } else {
            logger.error('error: ', err);
            if (app.get('env') === 'development') {
                err.status = err.status || 500;
                res.status(err.status);
                res.render('error', {error: err});
            } else {
                err = new HttpError(500);
                res.sendHttpError(err);
            }
        }
    });
};