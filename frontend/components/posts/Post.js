import React from 'react';
import PropTypes from 'prop-types';
import InfoContainer from '../../containers/posts/InfoContainer';
import TextContainer from '../../containers/posts/TextContainer';
import RepliesContainer from '../../containers/posts/RepliesContainer';

const Post = ({post, status, onFileClick, onFileDown}) => {
    let {board, id, name, theme, date, file, text, thread, parent, replies} = post;
    let postClass = thread ?
        {wrapper: 'op-post-wrapper', post: 'op-post'}
        :
        {wrapper: 'post-wrapper', post: 'post'};
    let threadLink = `/${board}/res/${parent || id}`;
    let postLink = `${threadLink}#${id}`;
    let fileLink = `/${board}/src/${file}`;
    date = new Date(date).toLocaleString();

    return (
        <div id={id}>
            <div className={postClass.wrapper}>
                <div className={postClass.post}>
                    <InfoContainer theme={theme} name={name} date={date} id={id} link={postLink} status={status}/>
                    {file && <img className="post-file" src={fileLink} onClick={onFileClick} onMouseDown={onFileDown}/>}
                    <TextContainer id={id} board={board} text={text}/>
                    <RepliesContainer replies={replies} link={threadLink}/>
                </div>
            </div>
            {status ? '' : <hr/>}
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        board: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        theme: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]).isRequired,
        thread: PropTypes.number.isRequired,
        parent: PropTypes.number,
        replies:  PropTypes.array
    }).isRequired,
    onFileClick: PropTypes.func.isRequired,
    onFileDown: PropTypes.func.isRequired
};

export default Post;