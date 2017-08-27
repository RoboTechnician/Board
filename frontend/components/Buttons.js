import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({timer, isTimerOn, update, autoUpdate}) => (
    <div className="thread-buttons">
        <span>
            >>[
            <a className="update-button" href="#" onClick={update}>Update Thread</a>
            {isTimerOn &&
            <span className="timer">: {timer}</span>
            }
            ]
        </span>
        <span>
            [Auto Update <input type="checkbox" onChange={autoUpdate}/>]
        </span>
    </div>
);

Buttons.propTypes = {
    timer: PropTypes.number.isRequired,
    isTimerOn: PropTypes.bool.isRequired,
    update: PropTypes.func.isRequired,
    autoUpdate: PropTypes.func.isRequired
};

export default Buttons;