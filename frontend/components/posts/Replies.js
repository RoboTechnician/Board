import React from 'react';
import PropTypes from 'prop-types';
import linkHandler from  '../../handlers/linkHandler';

const Replies = ({replies, link, posts}) => {
    let text = replies.reduce((prevText, id, i) => {
        prevText.push(<a className="post-link" href={`${link}#${id}`} onMouseEnter={linkHandler($('.posts'), posts)}>{`>>${id}`}</a>);
        if (i !== replies.length - 1)
            prevText.push(', ');
        return prevText;
    }, ['Replies: ']);
    return (
        <div className="post-reply">
            {replies.length ?
                text
                :
                null
            }
        </div>
    );
};

Replies.propTypes = {
    replies: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
};

export default Replies;