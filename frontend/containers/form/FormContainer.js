import Form from '../../components/form/Form';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        display: state.form.view.display
    }
};

export default connect(mapStateToProps)(Form);