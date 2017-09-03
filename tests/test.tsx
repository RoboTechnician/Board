import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import {setPath} from "./actions/path"
import App from './components/App';
import store from './store';

let path: string = window.location.pathname;
if (!/.\/$/.test(path))
    path += '/';

store.dispatch(setPath(path));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementsByClassName('content')[0]
);

export default store;