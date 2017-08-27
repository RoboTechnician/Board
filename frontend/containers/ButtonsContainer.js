import Buttons from '../components/Buttons';
import {connect} from 'react-redux';
import store from '../store';
import { updatePosts } from '../actions/postsActions';
import { timerOn, timerOff} from '../actions/timerActions';
import getData from '../handlers/getData';

const mapStateToProps = state => {
    return {
        timer: state.timer.value,
        isTimerOn: state.timer.isOn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        update: e => {
            e.preventDefault();
            getData(`${store.getState().path}data.json`)
                .then(posts => {
                    dispatch(updatePosts(posts));
                })
                .catch(err => {
                    console.error(err);
                });
        },
        autoUpdate: e => {
            e.target.checked ?
                dispatch(timerOn())
                :
                dispatch(timerOff());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);