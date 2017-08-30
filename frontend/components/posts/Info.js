import React from 'react';
import PropTypes from 'prop-types';

const Info = ({theme, name, date, id, link, status, onClick}) => (
    <div className="post-info">
        <span className="post-theme">{theme}</span>
        <span className="post-name">{name}</span>
        <span className="post-date">{date}</span>
        <span className="post-id"><a href={link}>№{id}</a></span>
        <span className="glyphicon glyphicon-play" title="Reply to post" onClick={onClick}></span>
        <span className={status ? 'post-number' : 'reply-button'}>
            {status ||
            [
                '[',
                <a className="alt-link" href={link}>Reply</a>,
                ']'
            ]
            }
        </span>
    </div>
);

Info.propTypes = {
    theme: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Info;