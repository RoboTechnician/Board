import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({value, onChange}) => (
    <tr>
        <td>
            <textarea className="post-area" name="text" value={value} placeholder="Commentary" onChange={onChange}/>
        </td>
    </tr>
);

Comment.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Comment;