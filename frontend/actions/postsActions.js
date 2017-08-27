export const updatePosts = (posts, clearForm = false) => {
    return {
        type: 'UPDATE_POSTS',
        posts,
        clearForm
    };
};

export const setPostText = (id, text, replies) => {
    return {
        type: 'SET_POST_TEXT',
        id,
        text,
        replies
    };
};

export const updateClonePosts = posts => {
    return {
        type: 'UPDATE_CLONE_POSTS',
        posts
    };
};