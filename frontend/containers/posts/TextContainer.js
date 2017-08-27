import React from 'react';
import { connect } from 'react-redux';
import Text from '../../components/posts/Text';
import { setPostText } from '../../actions/postsActions';
import getData from '../../handlers/getData';
import linkHandler from '../../handlers/linkHandler';
import store from '../../store';

class TextContainer extends React.Component {
    componentDidMount() {
        let text = this.props.text;
        if (Array.isArray(text)) return;
        let board = this.props.board;
        let id = this.props.id;

        let regexp = />>[0-9]+|\n/ig;

        let splitText = text.split(regexp);
        let elements = text.match(regexp) || [];
        let links = elements.filter(elem => {
            return elem !== '\n';
        });

        if (links.length === 0) {
            let text = elements.reduce((str, elem, i) => {
                str.push(<br/>);
                str.push(splitText[i + 1]);
                return str;
            }, [splitText[0]]);
            return store.dispatch(setPostText(id, text));
        }

        let paths = links.map(link => {
            return `/${board}/res/post/${link.slice(2)}/data.json`;
        });

        Promise.all(paths.map(getData))
            .then(posts => {
                let replies = [];
                let i = -1;
                elements = elements.map((elem) => {
                    if (elem === '\n') return <br/>;
                    if (posts[i + 1] && posts[i + 1].id < id) {
                        i++;
                        replies.push(posts[i].id);
                        return (
                            <a className="post-link" href={`/${posts[i].board}/res/${posts[i].parent || posts[i].id}#${posts[i].id}`} onMouseEnter={linkHandler($('.posts'), store.getState().posts)}>
                                {`>>${posts[i].id}`}
                            </a>
                        );
                    }
                    return elem;
                });

                let text = elements.reduce((str, elem, i) => {
                    str.push(elem);
                    str.push(splitText[i + 1]);
                    return str;
                }, [splitText[0]]);
                return store.dispatch(setPostText(id, text, replies));
            });
    }

    render() {
        return (
            <Text text={this.props.text} posts={this.props.posts}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        board: ownProps.board,
        text: ownProps.text,
    }
};

export default connect(mapStateToProps)(TextContainer);