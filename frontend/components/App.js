import React from 'react';
import PropTypes from 'prop-types';
import PostsContainer from '../containers/posts/PostsContainer';
import ButtonsContainer from '../containers/ButtonsContainer';
import FormPlaceContainer from '../containers/form/FormPlaceContainer';
import FixedFormContainer from  '../containers/form/FixedFormContainer';
import ImageContainer from '../containers/posts/ImageContainer';

const App = ({mainPage, fixedForm, image}) => (
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
        {fixedForm && <FixedFormContainer/>}
        {image && <ImageContainer/>}
    </div>
);

App.propTypes = {
    mainPage: PropTypes.bool.isRequired,
    fixedForm: PropTypes.bool.isRequired
};

export default App;