let defaultState = {
    posts: [],
    timers: [],
    currentPost: null

};

const clones = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_CLONE_POSTS':
            return action.posts;
        default:
            return state;
    }
};

export default clones;