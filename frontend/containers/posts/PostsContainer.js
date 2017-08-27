import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import getData from '../../handlers/getData';
import Posts from '../../components/posts/Posts';
import { updatePosts } from '../../actions/postsActions';

class PostsContainer extends React.Component {
    componentDidMount() {
        getData(`${store.getState().path}data.json`)
            .then(posts => {
                store.dispatch(updatePosts(posts));
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <Posts posts={this.props.posts} mainPage={this.props.mainPage}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        mainPage: state.mainPage,
    };
};

export default connect(mapStateToProps)(PostsContainer);