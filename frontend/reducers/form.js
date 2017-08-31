let defaultState = {
    view: {
        place: 'up',
        display: 'none',
        minWidth: 350,
        minHeight: 100,
        width: 350,
        height: 100,
        left: 0,
        top: 0,
        right: null,
        bottom: null
    },
    fields: {
        currentPostReply: null,
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
                view: {
                    ...state.view,
                    place: action.place,
                    display: action.display
                }
            };
        case 'RENDER_FORM':
            return {
                ...state,
                view: {
                    ...state.view,
                    width: action.width,
                    height: action.height,
                    left: action.left,
                    top: action.top,
                    right: action.right,
                    bottom: action.bottom
                }
            };
        case 'RESIZE_FORM':
            return {
                ...state,
                view: {
                    ...state.view,
                    width: action.width,
                    height: action.height
                }
            };
        case 'DISPLAY_FIXED_FORM':
            let text = state.fields.text + (!state.fields.text || /\n$/ig.test(state.fields.text) ? '' : '\n') + '>>' + action.id + '\n';
            return {
                view: {
                    ...state.view,
                    place: 'fixed',
                    display: '',
                },
                fields: {
                    ...state.fields,
                    currentPostReply: action.id,
                    text: text
                }
            };
        case 'FIXED_FORM':
            return {
                ...state,
                view: {
                    ...state.view,
                    left: action.left,
                    top: action.top
                }
            };
        case 'UNFIXED_FORM':
            return {
                ...state,
                view: {
                    ...state.view,
                    place: 'up',
                    display: 'none',
                    left: action.left,
                    top: action.top
                }
            };
        case 'UPDATE_POSTS':
            if (action.clearForm) {
                return {
                    fields: defaultState.fields,
                    view: {
                        ...state.view,
                        place: 'up',
                        display: 'none'
                    }
                };
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