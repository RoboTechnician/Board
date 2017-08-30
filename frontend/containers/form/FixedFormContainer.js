import FixedForm from '../../components/form/FixedForm';
import {connect} from 'react-redux';
import {fixedForm, unFixedForm, resizeForm, renderForm} from '../../actions/formActions';
import store from '../../store';

const mapStateToProps = state => {
    return {
        left: state.form.view.left,
        top: state.form.view.top
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


            if (left <= 0)
                element.style.left = '0px';
            else if (left + elementSize.width >= windowSize.width)
                element.style.left = windowSize.width - elementSize.width + 'px';
            else
                element.style.left = left + 'px';

            if (top <= 0)
                element.style.top = '0px';
            else if (top + elementSize.height >= windowSize.height)
                element.style.top = windowSize.height - elementSize.height + 'px';
            else
                element.style.top = top + 'px';

            mouseCoords.x = x;
            mouseCoords.y = y;
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

            left = +element.style.left.slice(0, -2);
            top = +element.style.top.slice(0, -2);

            if (coords.bottom >= y && coords.top <= y && coords.right >= x && coords.left <= x)
                dispatch(unFixedForm(left, top));
            else
                dispatch(fixedForm(left, top));
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
        let height = +element.style.height.slice(0, -2);

        const bottom = windowSize.height - top - form.offsetHeight;
        form.style.top = '';
        form.style.bottom = bottom + 'px';

        document.onmousemove = e => {
            e.preventDefault();

            let y = e.pageY;
            height += mouseY - y;
            element.style.height = height + 'px';

            if (bottom + form.offsetHeight >= windowSize.height)
                element.style.height = height - bottom - form.offsetHeight + windowSize.height + 'px';
            else if (height <= minHeight)
                element.style.height = minHeight + 'px';

            mouseY = y;
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            form.style.bottom = '';
            top = windowSize.height - bottom - form.offsetHeight;
            form.style.top = top + 'px';
            dispatch(renderForm({
                top: top,
                height: +element.style.height.slice(0, -2)
            }));
        };
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
        let height = +element.style.height.slice(0, -2);

        document.onmousemove = e => {
            e.preventDefault();

            let y = e.pageY;
            height += y - mouseY;
            element.style.height = height + 'px';
            if (top + form.offsetHeight >= windowSize.height)
                element.style.height = height - top - form.offsetHeight + windowSize.height + 'px';
            else if (height <= minHeight)
                element.style.height = minHeight + 'px';

            mouseY = y;
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            dispatch(resizeForm(undefined, +element.style.height.slice(0, -2)));
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
        let width = +element.style.width.slice(0, -2);

        const right = windowSize.width - left - form.offsetWidth;
        form.style.left = '';
        form.style.right = right + 'px';

        document.onmousemove = e => {
            e.preventDefault();

            let x = e.pageX;
            width += mouseX - x;
            element.style.width = width + 'px';

            if (right + form.offsetWidth >= windowSize.width)
                element.style.width = width - right - form.offsetWidth + windowSize.width + 'px';
            else if (width <= minWidth)
                element.style.width = minWidth + 'px';

            mouseX = x;
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            form.style.right = '';
            left = windowSize.width - right - form.offsetWidth;
            form.style.left = left + 'px';
            dispatch(renderForm({
                left: left,
                width: +element.style.width.slice(0, -2)
            }));
        };
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
        let width = +element.style.width.slice(0, -2);

        document.onmousemove = e => {
            e.preventDefault();

            let x = e.pageX;
            width += x - mouseX;
            element.style.width = width + 'px';
            if (left + form.offsetWidth >= windowSize.width)
                element.style.width = width - left - form.offsetWidth + windowSize.width + 'px';
            else if (width <= minWidth)
                element.style.width = minWidth + 'px';

            mouseX = x;
        };

        document.onmouseup = e => {
            e.preventDefault();

            document.onmousemove = null;
            document.onmouseup = null;
            dispatch(resizeForm(+element.style.width.slice(0, -2)));
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedForm);