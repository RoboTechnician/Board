import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/posts/Post';
import { displayImage, hideImage } from '../../actions/imageActions';
import store from '../../store';

const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = dispatch => {
    return {
        onFileClick: e => {
            e.preventDefault();

            let image = e.target;
            if (store.getState().image.link === image.src)
                return dispatch(hideImage());
            let width = image.naturalWidth;
            let height = image.naturalHeight;
            let left = 0;
            let top = 0;
            let windowSize = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };

            if (width > windowSize.width || height > windowSize.height) {
                while (width > windowSize.width || height > windowSize.height) {
                    if (width > windowSize.width) {
                        height = height * windowSize.width / width;
                        width = windowSize.width;
                    }
                    if (height > windowSize.height) {
                        width = width * windowSize.height / height;
                        height = windowSize.height;
                    }
                    left = (windowSize.width - width) / 2;
                    top = (windowSize.height - height) / 2;
                }
            } else {
                left = (windowSize.width - width) / 2;
                top = (windowSize.height - height) / 2;
            }

            dispatch(displayImage(image.src, width, height, left, top));
        },
        onFileDown: e => {
            if (e.button === 1) {
                e.preventDefault();
                e.target.onmouseup = e => {
                    e.preventDefault();
                    e.target.onmouseup = null;
                    let a = window.open(e.target.src, '_blank', '');
                    a.blur();
                    window.focus();
                };
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);