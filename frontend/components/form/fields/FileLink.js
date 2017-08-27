import React from 'react';
import PropTypes from 'prop-types';

const FileLink = ({value, onChange, submit}) => (
    <tr>
        <td>
            <span className="file-link">
                <input type="text" style={{width: '200px'}} placeholder="Link" value={value} onChange={onChange}/>
                <input type="submit" value="+" onClick={submit}/>
            </span>
        </td>
    </tr>
);

FileLink.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

export default FileLink;