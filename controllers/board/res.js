const router = require('express').Router();
const savePost = require('middleware/savePost');
const Post = require('models').Post;

router.get('/res/:thread', (req, res, next) => {
    Post.getThread(req.board.shortName, req.params.thread)
        .then(posts => {
            if (!posts.length) return next(404);
            res.render('thread', { board: req.board});
        })
        .catch(err => {
            next(err);
        });
});

router.get('/res/:thread/data.json', (req, res, next) => {
    Post.getThread(req.board.shortName, req.params.thread)
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            next(err);
        });
});

router.get('/res/post/:post/data.json', (req, res, next) => {
    Post.getPost(req.board.shortName, req.params.post)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            next(err);
        });
});

router.post('/res/:thread', savePost());

module.exports = router;