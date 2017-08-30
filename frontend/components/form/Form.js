import React from 'react';
import PropTypes from 'prop-types';
import FieldsContainer from '../../containers/form/fields/FieldsContainer'

const Form = ({display}) => {
    return (
        <div id="start-form" style={{display: display}}>
            <form className="post-form" method="post">
                <FieldsContainer/>
            </form>
        </div>
    )
};

Form.propTypes = {
    display: PropTypes.string.isRequired,
};

export default Form;