import * as React from 'react';
import {ServerPost} from "../../reducers/posts";
import {SetPostText} from "../../actions/posts";
import getData from '../../helpers/getData';
import store from '../../store';

interface Props {
    board: string;
    id: number;
    text: string | (string | JSX.Element)[];
}

class Text extends React.Component<Props, {}> {
    componentDidMount() {
        let {text, board, id} = this.props;
        if (Array.isArray(text)) return;

        let regexp: RegExp = />>[0-9]+|\n/ig;

        let splitText: string[] = text.split(regexp);
        let elements: string[] = text.match(regexp) || [];
        let links: string[] = elements.filter(elem => {
            return elem !== '\n';
        });

        if (links.length === 0) {
            let text: (string | JSX.Element)[] = elements.reduce((str: (string | JSX.Element)[], elem, i) => {
                str.push(<br/>);
                str.push(splitText[i + 1]);
                return str;
            }, [splitText[0]]);
            return store.dispatch(SetPostText.action(id, text));
        }

        let paths: string[] = links.map(link => {
            return `/${board}/res/post/${link.slice(2)}/data.json`;
        });

        Promise.all(paths.map(getData))
            .then((posts: ServerPost[]) => {
                let replies: number[] = [];
                let i = -1;
                let newElements: (string | JSX.Element)[] = elements.map((elem) => {
                    if (elem === '\n') return <br/>;
                    else if (posts[i + 1] && posts[i + 1].id < id) {
                        i++;
                        replies.push(posts[i].id);
                        return (
                            <a className="post-link" href={`/${posts[i].board}/res/${posts[i].parent || posts[i].id}#${posts[i].id}`}>
                                {`>>${posts[i].id}`}
                            </a>
                        );
                    }
                    i++;
                    return elem;
                });
                // onMouseEnter={linkHandler($('.posts'), store.getState().posts)}

                let text = newElements.reduce((str: (string | JSX.Element)[], elem: string | JSX.Element, i: number) => {
                    str.push(elem);
                    str.push(splitText[i + 1]);
                    return str;
                }, [splitText[0]]);
                return store.dispatch(SetPostText.action(id, text, replies));
            });
    }

    render() {
        let {text} = this.props;
        return (
            <div className="post-text">{text}</div>
        );
    }
}

export default Text;