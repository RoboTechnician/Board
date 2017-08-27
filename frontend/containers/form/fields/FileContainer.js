import File from '../../../components/form/fields/File';
import { connect } from 'react-redux';
import { setFormFile, setFormUtilsDisplay, clearFileField, displayLinkInput } from '../../../actions/formActions';

const mapStateToProps = state => {
    let fileLoaded = state.form.fields.fileField.fileLoaded;
    let linkInput = state.form.fields.fileField.linkInput;
    return {
        file: state.form.fields.file,
        utilsDisplay: state.form.fields.fileField.utilsDisplay,
        fileBtn: !(fileLoaded || linkInput)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        inputFile: e => {
            e.preventDefault();

            let fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.onchange = () => {
                let file = fileInput.files[0];
                let reader = new FileReader();

                reader.onload = e => {
                    file.uri = e.target.result;
                    dispatch(setFormFile(file));
                };
                reader.onerror = e => {
                    console.error(e.target.error);
                };

                reader.readAsDataURL(file);
            };
            fileInput.click();
        },
        mouseEnter: e => {
            e.preventDefault();
            dispatch(setFormUtilsDisplay(''));
        },
        mouseLeave: e => {
            e.preventDefault();
            dispatch(setFormUtilsDisplay('none'));
        },
        add: e => {
            e.preventDefault();
            dispatch(displayLinkInput())
        },
        deleted: e => {
            e.preventDefault();
            dispatch(clearFileField());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(File);