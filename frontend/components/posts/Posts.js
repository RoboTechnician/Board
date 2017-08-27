import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({posts, mainPage}) => (
    <div className="posts">
        {posts.map((post, i) => (
            <Post key={post.id} post={post} status={mainPage ? null : (post.deleted ? 'deleted' : i + 1)}/>
        ))}
    </div>
);

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            board: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            theme: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            file: PropTypes.string.isRequired,
            text: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array
            ]).isRequired,
            thread: PropTypes.number.isRequired,
            parent: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    mainPage: PropTypes.bool.isRequired
};

export default Posts;