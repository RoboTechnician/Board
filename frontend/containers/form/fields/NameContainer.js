import Name from '../../../components/form/fields/Name';
import { connect } from 'react-redux';
import { setFormName } from '../../../actions/formActions';

const mapStateToProps = state => {
    return {
        value: state.form.fields.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            e.preventDefault();
            dispatch(setFormName(e.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);