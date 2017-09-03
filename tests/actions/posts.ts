import {ServerPost, Post, PostText} from "../reducers/posts";
import {Action} from "./index";
import findPost from '../helpers/findPost';

export const UPDATE_POSTS = 'UPDATE_POSTS';
export const SET_POST_TEXT = 'SET_POST_TEXT';

export type Actions = {
    UPDATE_POSTS: {
        type: string,
        posts: ServerPost[]
    },
    SET_POST_TEXT: {
        type: string,
        id: number,
        text: PostText,
        replies: number[]
    }
};

export const actionCreators = {
    updatePosts: (posts: ServerPost[]): Actions['UPDATE_POSTS'] => ({
        type: UPDATE_POSTS,
        posts
    }),
    setPostText: (id: number, text: PostText, replies: number[]): Actions['SET_POST_TEXT'] => ({
        type: SET_POST_TEXT,
        id,
        text,
        replies
    })
};

/*export class PostsAction extends Action<Post[]> {}

export class UpdatePosts extends PostsAction {
    constructor(private posts: ServerPost[]) {
        super();
    }

    public static action(posts: ServerPost[]): UpdatePosts {
        return new UpdatePosts(posts);
    }

    public getNewState(state: Post[]): Post[] {
        let posts: Post[] = [...state];

        let newPosts: ServerPost[] = this.posts;
        let addedPosts: Post[] = [];
        for (let i = 0, j = 0; i < newPosts.length; i++, j++) {
            if (!posts[j]) {
                addedPosts.push({...newPosts[i], deleted: false, replies: []});
            } else if (newPosts[i].id > posts[j].id) {
                posts[j] = {...posts[j]};
                posts[j].deleted = true;
                i--;
            }
        }
        posts = [...posts, ...addedPosts];
        return posts;
    }
}

export class SetPostText extends PostsAction {
    constructor(private id: number, private text: PostText, private replies: number[]) {
        super();
    }

    public static action(id: number, text: PostText, replies: number[] = []): SetPostText {
        return new SetPostText(id, text, replies);
    }

    public getNewState(state: Post[]): Post[] {
        let posts: Post[] = [...state];

        let {post, number}: {post: Post | null, number: number} = findPost(this.id, posts);
        if (!post) return state;

        posts[number] = {...post, text: this.text};

        let replies: number[] = this.replies;
        if (replies && replies.length) {
            replies.forEach((id) => {
                let {post, number}: {post: Post | null, number: number} = findPost(id, posts);
                if (post)
                    posts[number] = {...post, replies: [...post.replies, this.id]};
            });
        }
        return posts;
    }
}*/
