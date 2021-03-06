import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../../containers/form/FormContainer';

const FormPlace = ({mainPage, isPlace, onClick}) => {

    return (
    <div className="start">
        <div className="start-button">
            [
            <a href="#" onClick={onClick}>{mainPage ? 'Start a New Thread' : 'Reply'}</a>
            ]
        </div>
        {isPlace && <FormContainer/>}
    </div>
)
};

FormPlace.propTypes = {
    mainPage: PropTypes.bool.isRequired,
    isPlace: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FormPlace;