export const setFormPlace = place => {
    return {
        type: 'SET_FORM_PLACE',
        place
    };
};

export const setFormDisplay = display => {
    return {
        type: 'SET_FORM_PLACE',
        display
    };
};

export const displayForm = (place, display) => {
    return {
        type: 'DISPLAY_FORM',
        place,
        display
    };
};

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM'
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

