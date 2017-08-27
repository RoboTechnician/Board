import store from '../store';
import { tick } from '../actions/timerActions';
import { updatePosts } from '../actions/postsActions';
import getData from '../handlers/getData';

let defaultState = {
    id: null,
    isOn: false,
    value: 10
};

const timer = (state = defaultState, action) => {
    let id;
    switch (action.type) {
        case 'TICK':
            let value = state.value;
            value--;
            id = setTimeout(() => {
                if (value > 1) {
                    store.dispatch(tick());
                } else {
                    let path = store.getState().path;
                    getData(`${path}data.json`)
                        .then(posts => {
                            store.dispatch(updatePosts(posts));
                        });
                }
            }, 1000);

            return {
                ...state,
                id,
                value
            };
        case 'UPDATE_POSTS':
            if (state.isOn) {
                clearTimeout(state.id);
                id = setTimeout(() => {
                    store.dispatch(tick());
                }, 1000);
                return {
                    ...state,
                    id,
                    value: 10
                };
            } else {
                return state;
            }

        case 'TIMER_ON':
            id = setTimeout(() => {
                store.dispatch(tick());
            }, 1000);
            return {
                id,
                isOn: true,
                value: 10
            };
            return;
        case 'TIMER_OFF':
            clearTimeout(state.id);
            return defaultState;
        default:
            return state;
    }
};

export default timer;