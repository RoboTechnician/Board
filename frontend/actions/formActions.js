import store from '../store';

export const displayForm = (place, display) => {
    return {
        type: 'DISPLAY_FORM',
        place,
        display
    };
};

export const renderForm = ({width = store.getState().form.view.width, height = store.getState().form.view.height,
                               left = store.getState().form.view.left, top = store.getState().form.view.top,
                               right = store.getState().form.view.right, bottom = store.getState().form.view.bottom}) => {
    return {
        type: 'RENDER_FORM',
        width,
        height,
        left,
        top,
        right,
        bottom
    };
};

export const resizeForm = ({width = store.getState().form.view.width, height = store.getState().form.view.height}) => {
    return {
        type: 'RESIZE_FORM',
        width,
        height
    };
};

export const displayFixedForm = id => {
    return {
        type: 'DISPLAY_FIXED_FORM',
        id
    };
};

export const fixedForm = (left = store.getState().form.view.left, top = store.getState().form.view.top) => {
    return {
        type: 'FIXED_FORM',
        left,
        top
    };
};

export const unFixedForm = (left = store.getState().form.view.left, top = store.getState().form.view.top) => {
    return {
        type: 'UNFIXED_FORM',
        left,
        top
    };
};

export const setFormName = name => {
    return {
        type: 'SET_FORM_NAME',
        name
    };
};

export const setFormTheme = theme => {
    return {
        type: 'SET_FORM_THEME',
        theme
    };
};

export const setFormText = text => {
    return {
        type: 'SET_FORM_TEXT',
        text
    };
};

export const setFormFileLink = link => {
    return {
        type: 'SET_FORM_FILE_LINK',
        link
    };
};

export const setFormFile = file => {
    return {
        type: 'SET_FORM_FILE',
        file
    };
};

export const clearFileField = () => {
    return {
        type: 'CLEAR_FILE_FIELD',
    };
};

export const displayLinkInput = () => {
    return {
        type: 'DISPLAY_LINK_INPUT',
    };
};

export const setFormUtilsDisplay = display => {
    return {
        type: 'SET_FORM_UTILS_DISPLAY',
        display
    };
};

