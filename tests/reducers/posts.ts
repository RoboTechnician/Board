import {Reducer} from "redux";
//import {Action} from "../actions/index";
import {PostsAction, UpdatePosts, SetPostText} from "../actions/posts";
//import findPost from '../helpers/findPost';

export type PostText = string | (string | JSX.Element)[];

export interface ServerPost {
    board: string;
    name: string;
    theme: string;
    file: string;
    text: PostText;
    thread: number;
    parent: number | null;
    id: number;
    date: string;
}

export interface Post extends ServerPost{
    replies: number[];
    deleted: boolean;
}

const defaultState: Post[] = [];

const posts: Reducer<Post[]> = (state = defaultState, action: PostsAction) => {
    try {
        return action.getNewState(state);
    } catch (e) {
        console.log(action);
        return state;
    }
};

/*const posts: Reducer<Post[]> = (state = defaultState, action: GenericAction) => {
    switch (action.type) {
        case actions.UPDATE_POSTS: {
            let posts: Post[] = [...state];
            let currentAction: UpdatePosts = action;

            let newPosts: any[] = currentAction.posts;
            let addedPosts: Post[] = [];
            for (let i = 0, j = 0; i < newPosts.length; i++, j++) {
                if (!posts[j]) {
                    newPosts[i].deleted = false;
                    newPosts[i].replies = [];
                    addedPosts.push(newPosts[i]);
                } else if (newPosts[i].id > posts[j].id) {
                    posts[j] = {...posts[j]};
                    posts[j].deleted = true;
                    i--;
                }
            }
            posts = [...posts, ...addedPosts];
            return posts;
        }
        case actions.SET_POST_TEXT:
            let posts: Post[] = [...state];

            let {post, number}: {post: Post | null, number: number} = findPost(action.id, posts);
            if (!post) return state;

            posts[number] = {...post, text: action.text};

            let replies: number[] = action.replies;
            if (replies && replies.length) {
                replies.forEach((id: number) => {
                    let {post, number}: {post: Post | null, number: number} = findPost(id, posts);
                    if (post)
                        posts[number] = {...post, replies: [...post.replies, action.id]};
                });
            }
            return posts;
        default:
            return state;
    }
};*/

export default posts;