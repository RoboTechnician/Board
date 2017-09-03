import * as React from 'react';

interface Props {
    theme: string;
    name: string;
    date: string;
    id: number;
    link: string;
    status: number | null;
}

const Info = ({theme, name, date, id, link, status}: Props) => (
    <div className="post-info">
        <span className="post-theme">{theme}</span>
        <span className="post-name">{name}</span>
        <span className="post-date">{date}</span>
        <span className="post-id"><a href={link}>№{id}</a></span>
        <span className="glyphicon glyphicon-play" title="Reply to post"></span>
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

export default Info;