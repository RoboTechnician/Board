export default (id, posts) => {
    for (let i = 0; i < posts.length; i++) {
        if (id === posts[i].id) return {post: posts[i], number: i};
    }
    return {post: null, number: -1};
}