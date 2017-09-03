import * as React from 'react';

interface Props {
    replies: number[];
    link: string;
}

const Replies = ({replies, link}: Props) => {
    let text: (string | JSX.Element)[] = replies.reduce((prevText: (string | JSX.Element)[], id: number, i: number) => {
        prevText.push(<a className="post-link" href={`${link}#${id}`}>{`>>${id}`}</a>);
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
//onMouseEnter={linkHandler($('.posts'), posts)}

export default Replies;