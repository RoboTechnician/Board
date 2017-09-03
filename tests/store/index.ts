import {createStore} from "redux";
import reducer, {State} from '../reducers';

export default createStore<State>(reducer);