import React from 'react';
import { connect } from 'react-redux';
import Replies from '../../components/posts/Replies';

const mapStateToProps = (state, ownProps) => {
    return {
        replies: ownProps.replies,
        link: ownProps.link,
        posts: state.posts
    };
};

export default connect(mapStateToProps)(Replies);