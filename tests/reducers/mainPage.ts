import {Reducer} from "redux";
import {Actions, PageAction} from "../actions/mainPage"

const mainPage: Reducer<boolean> = (state = false, action: PageAction) => {
    switch (action.type) {
        case Actions.setPage:
            return action.mainPage;
        default:
            return state;
    }
};

export default mainPage;