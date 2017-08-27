const router = require('express').Router();
const savePost = require('middleware/savePost');
const Post = require('models').Post;

router.get('/', (req, res, next) => {
    res.render('board', { board: req.board});
});

router.get('/data.json', (req, res, next) => {
    Post.getThreads(req.board.shortName)
        .then(threads => {
            res.json(threads);
        })
        .catch(err => {
            next(err);
        });
});

router.post('/', savePost(true));

module.exports = router;