import React from 'react';
import PropTypes from 'prop-types';

const Theme = ({value, onChange}) => (
    <tr>
        <td>
            <input type="text" name="theme" value={value} placeholder="Theme" onChange={onChange}/>
        </td>
    </tr>
);

Theme.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Theme;