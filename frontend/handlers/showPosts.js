const getData = require('./getData');
const renderPost = require('../render/renderPost');

module.exports = function showPosts(postsAreaSel, path, mainPage = false) {
    return getData(`${path}data.json`)
        .then(posts => {
            let postsArea = $(postsAreaSel);
            return posts.reduce(function (promise, post, i) {
                return promise
                    .then(() => {
                        return renderPost(post, mainPage, i + 1)
                            .then(result => {
                                postsArea.append(result);
                                return posts;
                            });
                    });
            }, Promise.resolve());
        })
        .catch(err => {
            console.log('test');
            console.log(err);
        });
};