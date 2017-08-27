const getData = require('./getData');
const renderPost = require('../render/renderPost');

module.exports = function updatePosts(postsAreaSel, oldPosts, path, deleteAction) {
    return getData(`${path}data.json`)
        .then(posts => {
            let postsArea = $(postsAreaSel);
            let newPosts = [];

            for (let i = 0, j = 0; i < posts.length; i++, j++) {
                if (!oldPosts[j]) {
                    newPosts.push(renderPost(posts[i], false, i + 1)
                        .then(result => {
                            postsArea.append(result);
                            return posts[i];
                        }));
                } else if (posts[i].id > oldPosts[j].id) {
                    if (deleteAction) {
                        deleteAction(oldPosts[j]);
                    }
                    i--;
                } else {
                    newPosts.push(Promise.resolve(posts[i]));
                }
            }
            return Promise.all(newPosts);
        });
};