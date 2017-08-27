import Theme from '../../../components/form/fields/Theme';
import { connect } from 'react-redux';
import { setFormTheme } from '../../../actions/formActions';

const mapStateToProps = state => {
    return {
        value: state.form.fields.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            e.preventDefault();
            dispatch(setFormTheme(e.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);