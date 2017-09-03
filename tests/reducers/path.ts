import {combineReducers, Reducer} from "redux";
import {Actions, PathAction} from "../actions/path";
import {RootAction} from "../actions/index";
import {Actions as PathActions} from "../actions/path"
import {SET_PATH} from "../actions/path";

export type State = {
    readonly path: string;
};

/*export const reducer = combineReducers<State>({
    path: (state = '/', action: RootAction) => {
        return 1;
    }
});*/
export const reducer: Reducer<State['path']>  = (state = '/', action: RootAction) => {
    let {type, mainPage}: {type: string, mainPage: boolean} = action;
    //return state;
};

/*const path: Reducer<string> = (state = '/', action: PathAction) => {
    switch (action.type) {
        case Actions.setPath:
            return action.path;
        default:
            return state;
    }
};*/