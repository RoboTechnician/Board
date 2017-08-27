import React from 'react';
import PropTypes from 'prop-types';

const Name = ({value, onChange}) => (
    <tr>
        <td>
            <input type="text" name="name" value={value} placeholder="Name" onChange={onChange}/>
        </td>
    </tr>
);

Name.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Name;