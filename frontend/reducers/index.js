import { combineReducers } from 'redux';
import mainPage from './mainPage';
import posts from './posts';
import path from './path';
import form from './form';
import timer from './timer';
import image from './image';

const reducer = combineReducers({
    mainPage,
    path,
    posts,
    form,
    timer,
    image
});

export default reducer;