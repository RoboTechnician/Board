import {Actions as PathActions} from "./path";
import {Actions as PageActions} from "./mainPage";
import {Actions as PostsActions} from "./posts";

export type RootAction =
    | PathActions[keyof PathActions]
    | PageActions[keyof PageActions]
    | PostsActions[keyof PostsActions];