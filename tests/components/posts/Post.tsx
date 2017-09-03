import * as React from 'react';
import Info from './Info';
import Text from './Text';
import Replies from './Replies';
import {Post as PostObj} from "../../reducers/posts"

interface Props {
    post: PostObj;
    status: number | null;
}

const Post = ({post, status}: Props) => {
    let {board, id, name, theme, date, file, text, thread, parent, replies} = post;
    let postClass = thread ?
        {wrapper: 'op-post-wrapper', post: 'op-post'}
        :
        {wrapper: 'post-wrapper', post: 'post'};
    let threadLink: string = `/${board}/res/${parent || id}`;
    let postLink: string = `${threadLink}#${id}`;
    let fileLink: string = `/${board}/src/${file}`;
    date = new Date(date).toLocaleString();

    return (
        <div id={id.toString()}>
            <div className={postClass.wrapper}>
                <div className={postClass.post}>
                    <Info theme={theme} name={name} date={date} id={id} link={postLink} status={status}/>
                    {file && <img className="post-file" src={fileLink}/>}
                    <Text id={id} board={board} text={text}/>
                    <Replies replies={replies} link={threadLink}/>
                </div>
            </div>
            {status ? '' : <hr/>}
        </div>
    );
};

export default Post;