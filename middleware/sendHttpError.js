module.exports = (req, res, next) => {
    res.sendHttpError = err => {
        res.status(err.status);
        if (res.req.headers['x-requested-with'] === 'XMLHttpRequest') {
            res.json(err);
        } else {
            res.render('error', {error: err});
        }
    };

    next();
};