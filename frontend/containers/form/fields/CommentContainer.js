import Comment from '../../../components/form/fields/Comment';
import { connect } from 'react-redux';
import { setFormText } from '../../../actions/formActions';

const mapStateToProps = state => {
    return {
        value: state.form.fields.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            e.preventDefault();
            dispatch(setFormText(e.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);