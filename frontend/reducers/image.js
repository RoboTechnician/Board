import { hideImage } from '../actions/imageActions';
import store from '../store';

let defaultState = {
    display: false,
    link: '',
    left: 0,
    top: 0,
    height: 0,
    width: 0
};

const image = (state = defaultState, action) => {
    switch (action.type) {
        case 'DISPLAY_IMAGE':
            document.onkeydown = null;
            document.onkeydown = e => {
                if (e.keyCode === 27)
                    store.dispatch(hideImage());
            };
            return {
                display: true,
                link: action.link,
                left: action.left,
                top: action.top,
                height: action.height,
                width: action.width
            };
        case 'HIDE_IMAGE':
            document.onkeydown = null;
            return defaultState;
        case 'MOVE_IMAGE':
            return {
                ...state,
                left: action.left,
                top: action.top
            };
        case 'RESIZE_IMAGE':
            return {
                ...state,
                width: action.width,
                height: action.height
            };
        case 'RENDER_IMAGE':
            return {
                ...state,
                width: action.width,
                height: action.height,
                left: action.left,
                top: action.top
            };
        default:
            return state;
    }
};

export default image;