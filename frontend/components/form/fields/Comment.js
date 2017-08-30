import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({value, resize, width, height, onChange, onMouseDown}) => (
    <tr>
        <td>
            <textarea className="post-area" name="text" value={value} placeholder="Commentary"
                      onChange={onChange} onMouseDown={onMouseDown} style={{resize: resize, width: width + 'px', height: height + 'px'}}/>
        </td>
    </tr>
);

Comment.propTypes = {
    value: PropTypes.string.isRequired,
    resize: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired

};

export default Comment;