import Submit from '../../../components/form/fields/Submit';
import getData from '../../../handlers/getData';
import sendData from '../../../handlers/sendData';
import { updatePosts } from '../../../actions/postsActions';
import {connect} from 'react-redux';
import store from '../../../store';

const mapDispatchToProps = dispatch => {
    return {
        send: e => {
            e.preventDefault();

            let {name, theme, text, file} = store.getState().form.fields;
            if (!text) return;

            let formData = new FormData();
            let path = store.getState().path;
            let mainPage = store.getState().mainPage;

            formData.append('name', name);
            formData.append('theme', theme);
            formData.append('text', text);
            file = file ? file : '';
            formData.append('file', file);
            sendData(path, formData)
                .then(post => {
                    if (mainPage) {
                        window.location.href = `/${post.board}/res/${post.id}`;
                    } else {
                        getData(`${path}data.json`)
                            .then(posts => {
                                dispatch(updatePosts(posts, true));
                            });
                    }
                })
        }
    };
};

export default connect(null, mapDispatchToProps)(Submit);