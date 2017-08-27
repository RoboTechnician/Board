import FileLink from '../../../components/form/fields/FileLink';
import { connect } from 'react-redux';
import { setFormFileLink } from '../../../actions/formActions';
import store from '../../../store';

const mapStateToProps = state => {
    return {
        value: state.form.fields.fileLink
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            e.preventDefault();
            dispatch(setFormFileLink(e.target.value));
        },
        submit: e => {
            e.preventDefault();
            let iframe = document.createElement('iframe');
            iframe.src = store.getState().form.fields.fileLink;
            iframe.onload = e => {
                console.log(e);
            };
            /*document.getElementsByClassName('posts')[0].appendChild(iframe);
            setTimeout(() => console.dir(iframe), 2000);*/
            /*fetch(store.getState().form.fields.fileLink)
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.error(err);
                });*/
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FileLink);