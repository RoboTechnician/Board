import React from 'react';
import PropTypes from 'prop-types';

const Text = ({text}) => (
    <div className="post-text">{text}</div>
);

Text.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
};

export default Text;