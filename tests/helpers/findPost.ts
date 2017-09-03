import {Post} from "../reducers/posts";

export default (id: number, posts: Post[]): {post: Post | null, number: number} => {
    for (let i = 0; i < posts.length; i++) {
        if (id === posts[i].id) return {post: posts[i], number: i};
    }
    return {post: null, number: -1};
}