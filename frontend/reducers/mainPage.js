const mainPage = (state = false, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.mainPage;
        default:
            return state;
    }
};

export default mainPage;