let defaultState = {
    place: 'up',
    display: 'none',
    fields: {
        name: '',
        theme: '',
        text: '',
        fileLink: '',
        file: null,
        fileField: {
            fileLoaded: false,
            linkInput: false,
            utilsDisplay: 'none'
        }
    }
};

const form = (state = defaultState, action) => {
    switch (action.type) {
        case 'DISPLAY_FORM':
            return {
                ...state,
                place: action.place,
                display: action.display
            };
        case 'UPDATE_POSTS':
            if (action.clearForm) {
                return defaultState;
            } else {
                return state;
            }
        case 'SET_FORM_NAME':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    name: action.name
                }
            };
        case 'SET_FORM_THEME':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    theme: action.theme
                }
            };
        case 'SET_FORM_TEXT':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    text: action.text
                }
            };
        case 'SET_FORM_FILE_LINK':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    fileLink: action.link
                }
            };
        case 'SET_FORM_FILE':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    fileLink: '',
                    file: action.file,
                    fileField: {
                        ...state.fields.fileField,
                        fileLoaded: true,
                        linkInput: false
                    }
                }
            };
        case 'CLEAR_FILE_FIELD':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    fileLink: '',
                    file: null,
                    fileField: {
                        ...state.fields.fileField,
                        fileLoaded: false,
                        linkInput: false
                    }
                }
            };
        case 'SET_FORM_UTILS_DISPLAY':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    fileField: {
                        ...state.fields.fileField,
                        utilsDisplay: action.display
                    }
                }
            };
        case 'DISPLAY_LINK_INPUT':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    fileField: {
                        ...state.fields.fileField,
                        linkInput: true
                    }
                }
            };
        default:
            return state;
    }
};

export default form;