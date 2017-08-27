import findPost from '../handlers/findPost';

const posts = (state = [], action) => {
    let posts = [...state];
    switch (action.type) {
        case 'UPDATE_POSTS':
            let newPosts = action.posts;
            let addedPosts = [];
            for (let i = 0, j = 0; i < newPosts.length; i++, j++) {
                if (!posts[j]) {
                    newPosts[i].deleted = false;
                    newPosts[i].replies = [];
                    addedPosts.push(newPosts[i]);
                } else if (newPosts[i].id > posts[j].id) {
                    posts[j] = {...posts[j]};
                    posts[j].deleted = true;
                    i--;
                }
            }
            posts = [...posts, ...addedPosts];
            return posts;
        case 'SET_POST_TEXT':
            let {post, number} = findPost(action.id, posts);
            if (!post) return state;

            let newPost = {...post, replies: [...post.replies]};
            newPost.text = action.text;
            posts[number] = newPost;

            let replies = action.replies;
            if (replies && replies.length) {
                replies.forEach(id => {
                    let {post, number} = findPost(id, posts);
                    if (post) {
                        newPost = {...post, replies: [...post.replies]};
                        newPost.replies.push(action.id);
                        posts[number] = newPost;
                    }
                });
            }

            return posts;
        default:
            return state;
    }
};

export default posts;