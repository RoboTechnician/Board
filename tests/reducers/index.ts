import { combineReducers } from 'redux';
import mainPage from './mainPage';
import path from './path';
import posts, {Post} from './posts';

export interface State {
    mainPage: boolean;
    path: string;
    posts: Post[];
}

export default combineReducers<State>({
    mainPage,
    path,
    posts
});