import  * as React from 'react';
import {connect} from "react-redux";
import Posts from './posts/Posts';
import {State} from "../reducers/index"

interface Props {
    mainPage: boolean;
}

const App = ({mainPage}: Props) => (
    <div>
        <hr/>
        <hr/>
        <Posts/>
        {mainPage || [
            <hr/>,
            <hr/>
        ]}
    </div>
);

const mapStateToProps = (state: State) => {
    return {
        posts: state.posts,
        mainPage: state.mainPage,
    };
};

export default connect(mapStateToProps)(App);