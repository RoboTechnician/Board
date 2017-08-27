const router = require('express').Router();
const path = require('path');

router.get('/src/:file', (req, res, next) => {
    let board = req.board;
    let thread = req.params.thread;
    let file = req.params.file;
    let options = {
        root: path.join(__dirname, '../../src/')
    };
    res.sendFile(`${board.shortName}/${file}`, options, err => {
        if (err) {
            if (err.statusCode === 404) return next(404);
            return next(err);
        }
    });
});

module.exports = router;