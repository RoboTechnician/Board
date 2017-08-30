import React from 'react';
import { connect } from 'react-redux';
import Info from '../../components/posts/Info';
import { displayFixedForm, unFixedForm } from '../../actions/formActions';
import store from '../../store';

const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: e => {
            e.preventDefault();
            (store.getState().form.fields.currentPostReply !== ownProps.id) || (store.getState().form.view.place !== 'fixed') ?
                dispatch(displayFixedForm(ownProps.id))
                :
                dispatch(unFixedForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);