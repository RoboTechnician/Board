import React from 'react';
import { connect } from 'react-redux';
import Image from '../../components/posts/Image';
import { hideImage, moveImage, renderImage } from '../../actions/imageActions';
import store from '../../store';

const mapStateToProps = state => {
    return {
        link: state.image.link,
        left: state.image.left,
        top: state.image.top,
        width: state.image.width,
        height: state.image.height,
    };
};

let mouseIsDown = false;
const mapDispatchToProps = dispatch => {
    return {
        onMouseDown: e => {
            e.preventDefault();

            let mouseCoords = {x: e.pageX, y: e.pageY};
            let left = store.getState().image.left;
            let top = store.getState().image.top;
            let close = true;
            mouseIsDown = true;
            if (e.button !== 0)
                close = false;

            document.onmousemove = e => {
                e.preventDefault();

                let x = e.pageX;
                let y = e.pageY;
                if (mouseCoords.x !== x || mouseCoords.y !== y)
                    close = false;

                left += x - mouseCoords.x;
                top += y - mouseCoords.y;

                mouseCoords.x = x;
                mouseCoords.y = y;

                dispatch(moveImage(left, top));
            };

            document.onmouseup = e => {
                e.preventDefault();

                document.onmousemove = null;
                document.onmouseup = null;

                if (e.button === 1) {
                    let a = window.open(store.getState().image.link, '_blank', '');
                    a.blur();
                    window.focus();
                }

                mouseIsDown = false;
                if (close)
                    dispatch(hideImage());
                else
                    dispatch(moveImage(left, top));
            };
        },
        onWheel: e => {
            e.preventDefault();
            //let image = e.target;
            let width = store.getState().image.width;
            let height = store.getState().image.height;
            let left = store.getState().image.left;
            let top = store.getState().image.top;
            let shiftX = e.pageX - pageXOffset - left;
            let shiftY = e.pageY - pageYOffset - top;
            console.log(`ShiftX: ${shiftX}; ShiftY: ${shiftY}`);

            if (e.deltaY > 0) {
                left += shiftX / 5;
                top += shiftY / 5;
                width = width * 4 / 5;
                height = height * 4 / 5;
            } else {
                left -= shiftX / 4;
                top -= shiftY / 4;
                width = width * 5 / 4;
                height = height * 5 / 4;
            }

            if (width > height) {
                if (width < 100) return;
            } else {
                if (height < 100) return;
            }

            dispatch(renderImage(width, height, left, top));
        },
        onKeyDown: e => {
            if (e.keyCode === 27)
                dispatch(hideImage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);