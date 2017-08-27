import Fields from '../../../components/form/fields/Fields';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        linkField: state.form.fields.fileField.linkInput
    };
};

export default connect(mapStateToProps)(Fields);