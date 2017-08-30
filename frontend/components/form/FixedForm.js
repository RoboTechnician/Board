import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../../containers/form/FormContainer';

const FixedForm = ({left, top, onMouseDown, topDown, bottomDown, leftDown, rightDown}) => (
    <div className="fixed-form-container" style={{left: left + 'px', top: top + 'px'}}>
        <div className="fixed-form-head" onMouseDown={onMouseDown}>
            <span>Form </span>
            <span className="glyphicon glyphicon-remove"></span>
        </div>
        <FormContainer/>
        <div className="resizer resizer-top" onMouseDown={topDown}></div>
        <div className="resizer resizer-bottom" onMouseDown={bottomDown}></div>
        <div className="resizer resizer-left" onMouseDown={leftDown}></div>
        <div className="resizer resizer-right" onMouseDown={rightDown}></div>
    </div>
);

FixedForm.propTypes = {
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    topDown: PropTypes.func.isRequired,
    bottomDown: PropTypes.func.isRequired,
    leftDown: PropTypes.func.isRequired,
    rightDown: PropTypes.func.isRequired,
};

export default FixedForm;