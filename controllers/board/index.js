const router = require('express').Router();
const Board = require('models').Board;

router.use('/:board', saveBoard, require('./main'));
router.use('/:board', saveBoard, require('./res'));
router.use('/:board', saveBoard, require('./src'));

function saveBoard(req, res, next) {
    Board.getBoard(req.params.board)
        .then(board => {
            if (board === null) return next(404);

            req.board = board;
            next();
        })
        .catch(err => {
            next(err);
        });
}

module.exports = router;