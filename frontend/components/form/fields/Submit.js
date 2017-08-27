import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({send}) => (
    <tr>
        <td>
            <input className="post-submit" name="submit" type="submit" value="Send" onClick={send}/>
        </td>
    </tr>
);

Submit.propTypes = {
    send: PropTypes.func.isRequired
};

export default Submit;