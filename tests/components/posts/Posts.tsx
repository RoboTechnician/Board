import * as React from 'react';
import {connect} from "react-redux";
import Post from './Post';
import {Post as PostObj, ServerPost} from "../../reducers/posts";
import {State} from "../../reducers/index"
import {UpdatePosts} from "../../actions/posts"
import getData from '../../helpers/getData';
import store from '../../store';

interface Props {
    posts: PostObj[];
    mainPage: boolean;
}

class Posts extends React.Component<Props, {}> {
    componentDidMount() {
        getData<ServerPost[]>(`${store.getState().path}data.json`)
            .then(posts=> {
                store.dispatch(UpdatePosts.action(posts));
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        let {posts, mainPage} = this.props;
        return (
            <div className="posts">
                {posts.map((post, i) => (
                    <Post key={post.id} post={post} status={mainPage ? null : i + 1}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        posts: state.posts,
        mainPage: state.mainPage,
    };
};

export default connect(mapStateToProps)(Posts);