import React from 'react';
import PropTypes from 'prop-types';
import PostsContainer from '../containers/posts/PostsContainer';
import ButtonsContainer from '../containers/ButtonsContainer';
import FormPlaceContainer from '../containers/form/FormPlaceContainer';

const App = ({mainPage}) => (
    <div>
        <hr/>
        <FormPlaceContainer place="up"/>
        <hr/>
        <PostsContainer/>
        {mainPage || [
            <ButtonsContainer/>,
            <hr/>,
            <FormPlaceContainer place="down"/>,
            <hr/>
        ]}
    </div>
);

App.propTypes = {
    mainPage: PropTypes.bool.isRequired
};

export default App;