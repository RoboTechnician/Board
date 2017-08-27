import FormPlace from '../../components/form/FormPlace';
import {connect} from 'react-redux';
import {displayForm} from '../../actions/formActions';
import store from '../../store/index';

const mapStateToProps = (state, ownProps) => {
    return {
        mainPage: state.mainPage,
        isPlace: state.form.place === ownProps.place,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: e => {
            e.preventDefault();
            store.getState().form.place === ownProps.place ?
                dispatch(displayForm(ownProps.place, store.getState().form.display === 'none' ? '' : 'none'))
                :
                dispatch(displayForm(ownProps.place, ''));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPlace);