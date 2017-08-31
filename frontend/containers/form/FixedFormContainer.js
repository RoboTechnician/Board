import FixedForm from '../../components/form/FixedForm';
import {connect} from 'react-redux';
import {fixedForm, unFixedForm, resizeForm, renderForm} from '../../actions/formActions';
import store from '../../store';

const mapStateToProps = state => {
    return {
        left: state.form.view.left,
        top: state.form.view.top,
        right: state.form.view.right,
        bottom: state.form.view.bottom
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onMouseDown: onMouseDown(dispatch),
        topDown: topDown(dispatch),
        bottomDown: bottomDown(dispatch),
        leftDown: leftDown(dispatch),
        rightDown: rightDown(dispatch)
    }
};

function getWindowSize() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
}

function onMouseDown(dispatch) {
    return e => {
        e.preventDefault();

        let mouseCoords = {x: e.pageX, y: e.pageY};
        let left = store.getState().form.view.left;
        let top = store.getState().form.view.top;
        let element = e.target.closest('.fixed-form-container');
        let elementSize = {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
        let windowSize = getWindowSize();

        document.onmousemove = e => {
            e.preventDefault();

            let x = e.pageX;
            let y = e.pageY;

            left += x - mouseCoords.x;
            top += y - mouseCoords.y;

            let realLeft, realTop;
            if (left <= 0)
                realLeft = 0;
            else if (left + elementSize.width >= windowSize.width)
                realLeft = windowSize.width - elementSize.width;
            else
                realLeft = left;

            if (top <= 0)
                realTop = 0;
            else if (top + elementSize.height >= windowSize.height)
                realTop = windowSize.height - elementSize.height;
            else
                realTop = top;

            mouseCoords.x = x;
            mouseCoords.y = y;

            dispatch(fixedForm(realLeft, realTop));
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;

            let x = e.pageX;
            let y = e.pageY;
            let close = document.getElementsByClassName('glyphicon-remove')[0].getBoundingClientRect();
            let coords = {
                top: close.top + pageYOffset,
                bottom: close.bottom + pageYOffset,
                left: close.left + pageXOffset,
                right: close.right + pageXOffset
            };

            if (coords.bottom >= y && coords.top <= y && coords.right >= x && coords.left <= x)
                dispatch(unFixedForm());
        };
    };
}

function topDown(dispatch) {
    return e => {
        e.preventDefault();

        let mouseY = e.pageY;
        let top = store.getState().form.view.top;
        let windowSize = getWindowSize();
        let minHeight = store.getState().form.view.minHeight;
        let form = e.target.closest('.fixed-form-container');
        let element = document.querySelector('#start-form .post-area');
        let height = store.getState().form.view.height;

        const bottom = windowSize.height - top - form.offsetHeight;

        document.onmousemove = e => {
            e.preventDefault();

            let y = e.pageY;
            height += mouseY - y;
            element.style.height = height + 'px';

            let realHeight;
            if (bottom + form.offsetHeight >= windowSize.height) {
                realHeight = height - bottom - form.offsetHeight + windowSize.height;
                element.style.height = realHeight +'px';
            }
            else if (height <= minHeight) {
                realHeight = minHeight;
                element.style.height = realHeight + 'px';
            }
            else
                realHeight = height;

            mouseY = y;

            dispatch(resizeForm({
                height: realHeight
            }));
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            top = windowSize.height - bottom - form.offsetHeight;
            dispatch(renderForm({
                top: top,
                bottom: null
            }))
        };

        dispatch(renderForm({
            top: null,
            bottom
        }))
    };
}

function bottomDown(dispatch) {
    return e => {
        e.preventDefault();

        let mouseY = e.pageY;
        let top = store.getState().form.view.top;
        let minHeight = store.getState().form.view.minHeight;
        let form = e.target.closest('.fixed-form-container');
        let windowSize = getWindowSize();
        let element = document.querySelector('#start-form .post-area');
        let height = store.getState().form.view.height;

        document.onmousemove = e => {
            e.preventDefault();

            let y = e.pageY;
            height += y - mouseY;
            element.style.height = height + 'px';

            let realHeight;
            if (top + form.offsetHeight >= windowSize.height) {
                realHeight = height - top - form.offsetHeight + windowSize.height;
                element.style.height = realHeight + 'px';
            }
            else if (height <= minHeight) {
                realHeight = minHeight;
                element.style.height = realHeight + 'px';
            } else
                realHeight = height;

            mouseY = y;

            dispatch(resizeForm({
                height: realHeight
            }))
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
        };
    }
}

function leftDown(dispatch) {
    return e => {
        e.preventDefault();

        let mouseX = e.pageX;
        let left = store.getState().form.view.left;
        let windowSize = getWindowSize();
        let minWidth = store.getState().form.view.minWidth;
        let form = e.target.closest('.fixed-form-container');
        let element = document.querySelector('#start-form .post-area');
        let width = store.getState().form.view.width;

        const right = windowSize.width - left - form.offsetWidth;

        document.onmousemove = e => {
            e.preventDefault();

            let x = e.pageX;
            width += mouseX - x;
            element.style.width = width + 'px';

            let realWidth;
            if (right + form.offsetWidth >= windowSize.width) {
                realWidth = width - right - form.offsetWidth + windowSize.width;
                element.style.width = realWidth + 'px';
            }
            else if (width <= minWidth) {
                realWidth = minWidth;
                element.style.width = realWidth + 'px';
            } else
                realWidth = width;

            mouseX = x;

            dispatch(resizeForm({
                width: realWidth
            }))
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            left = windowSize.width - right - form.offsetWidth;
            dispatch(renderForm({
                left: left,
                right: null
            }));
        };

        dispatch(renderForm({
            left: null,
            right
        }))
    }
}

function rightDown(dispatch) {
    return e => {
        e.preventDefault();

        let mouseX = e.pageX;
        let left = store.getState().form.view.left;
        let minWidth = store.getState().form.view.minWidth;
        let form = e.target.closest('.fixed-form-container');
        let windowSize = getWindowSize();
        let element = document.querySelector('#start-form .post-area');
        let width = store.getState().form.view.width;

        document.onmousemove = e => {
            e.preventDefault();

            let x = e.pageX;
            width += x - mouseX;
            element.style.width = width + 'px';

            let realWidth;
            if (left + form.offsetWidth >= windowSize.width) {
                realWidth = width - left - form.offsetWidth + windowSize.width;
                element.style.width = realWidth + 'px';
            }
            else if (width <= minWidth) {
                realWidth = minWidth;
                element.style.width = realWidth + 'px';
            } else
                realWidth = width;

            mouseX = x;

            dispatch(resizeForm({
                width: realWidth
            }))
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedForm);