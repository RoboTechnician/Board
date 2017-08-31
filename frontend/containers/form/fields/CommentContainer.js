import Comment from '../../../components/form/fields/Comment';
import { connect } from 'react-redux';
import { setFormText, resizeForm } from '../../../actions/formActions';
import store from '../../../store';

const mapStateToProps = state => {
    return {
        value: state.form.fields.text,
        resize: state.form.view.place === 'fixed' ? 'none' : '',
        width: state.form.view.width,
        height: state.form.view.height
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            e.preventDefault();
            dispatch(setFormText(e.target.value));
        },
        onMouseDown: e => {
            if (store.getState().form.view.place === 'fixed') return;

            let element = e.target;
            let box = element.getBoundingClientRect();
            let coords = {
                top: box.top + pageYOffset,
                bottom: box.bottom + pageYOffset,
                left: box.left + pageXOffset,
                right: box.right + pageXOffset,
            };
            if ((coords.right - e.pageX < 20 && coords.right - e.pageX >= 0) && (coords.bottom - e.pageY < 20 && coords.bottom - e.pageY >= 0)) {
                e.preventDefault();

                let mouseCoords = {x: e.pageX, y: e.pageY};
                let elementSize = {width: store.getState().form.view.width, height: store.getState().form.view.height};
                let minElementSize = {width: store.getState().form.view.minWidth, height: store.getState().form.view.minHeight};

                document.onmousemove = e => {
                    e.preventDefault();

                    let x = e.pageX;
                    let y = e.pageY;

                    elementSize.width += (x - mouseCoords.x)*2;
                    elementSize.height += y - mouseCoords.y;

                    let realWidth, realHeight;
                    if (elementSize.width <= minElementSize.width)
                        realWidth = minElementSize.width;
                    else
                        realWidth = elementSize.width;

                    if (elementSize.height <= minElementSize.height)
                        realHeight = minElementSize.height;
                    else
                        realHeight = elementSize.height;

                    mouseCoords.x = x;
                    mouseCoords.y = y;

                    dispatch(resizeForm({
                        width: realWidth,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);