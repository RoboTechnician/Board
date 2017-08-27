import { combineReducers } from 'redux';
import mainPage from './mainPage';
import posts from './posts';
import path from './path';
import form from './form';
import timer from './timer';
import clonePosts from './clones';

const reducer = combineReducers({
    mainPage,
    path,
    posts,
    form,
    timer
});

export default reducer;