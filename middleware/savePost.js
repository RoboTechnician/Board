const Post = require('models').Post;
const path = require('path');
const multiparty = require('multiparty');
const fs = require('fs');

module.exports = function (thread = false) {
    return function (req, res, next) {
        let data = {};
        let filePath = path.join(__dirname, `../src/${req.board.shortName}/`);
        let form = new multiparty.Form({
            uploadDir: filePath
        });

        form.on('field', (name, value) => {
            data[name] = value;
        });

        form.on('file', (name, file) => {
            data.file = file.originalFilename;
            data.path = file.path;
        });

        form.on('close', () => {
            if (data.name === '') data.name = 'Anonymous';

            if (data.path) {
                fs.rename(data.path, filePath + data.file, save);
            } else {
                save();
            }

            function save() {
                let post;
                post = thread ?
                    new Post(req.board.shortName, data.name, data.theme, data.file, data.text)
                    :
                    new Post(req.board.shortName, data.name, data.theme, data.file, data.text, thread, req.params.thread);

                post.save()
                    .then(post => {
                        res.json(post);
                    })
                    .catch(err => {
                        return next(err);
                    });
            }
        });

        form.parse(req);
    }
};