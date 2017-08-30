import React from 'react';
import PropTypes from 'prop-types';

const Image = ({link, left, top, width, height, onMouseDown, onWheel, onKeyDown}) => (
    <img className="fixed-file" style={{
        left,
        top,
        width,
        height
    }} src={link} onMouseDown={onMouseDown} onWheel={onWheel}/>
);

Image.propTypes = {
    link: PropTypes.string.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onWheel: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired
};

export default Image;