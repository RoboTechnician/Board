import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../../containers/form/FormContainer';

const FixedForm = ({left, top, right, bottom, onMouseDown, topDown, bottomDown, leftDown, rightDown}) => {
    left = left === null ? '' : left + 'px';
    top = top === null ? '' : top + 'px';
    right = right === null ? '' : right + 'px';
    bottom = bottom === null ? '' : bottom + 'px';
    return (
    <div className="fixed-form-container" style={{left, top, right, bottom}}>
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
)}
;

FixedForm.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    onMouseDown: PropTypes.func.isRequired,
    topDown: PropTypes.func.isRequired,
    bottomDown: PropTypes.func.isRequired,
    leftDown: PropTypes.func.isRequired,
    rightDown: PropTypes.func.isRequired,
};

export default FixedForm;