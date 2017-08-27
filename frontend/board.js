/*const showPosts = require('./handlers/showPosts');
const updatePosts = require('./handlers/updatePosts');
const hideForm = require('./handlers/hideForm');
const sendPost = require('./handlers/sendPost');
const Timer = require('./models').Timer;*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer';

let path = window.location.pathname;
if (!/.\/$/.test(path))
    path += '/';

store.dispatch({
    type:'SET_PATH',
    path
});

store.dispatch({
    type: 'SET_PAGE',
    mainPage: true
});

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementsByClassName('content')[0]
);

/*
let path = window.location.pathname;
if (!/.\/$/.test(path))
    path += '/';
let posts = [];

let postsArea = $('.posts');

let startPlaces = $('.start');
let startButtons = $('.start-button a');
let form = $('#start-form');
let formSubmit = $('.post-submit');

let fileInput = $('.file-input');
let fileField = $('<input type="file">').get(0);
let filePreview = $('.file-input-cl');

//------------------------------------------------------------------------------------------------------------------

startButtons.html('Start a New Thread');
startPlaces[0].append(form[0]);
for (let i = 0; i < startPlaces.length; i++) {
    startButtons[i].onclick = hideForm(startPlaces[i], form);
}

fileField.onchange = function () {
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
        let uri = event.target.result;
        let img = $(`<img title="${file.name}">`).get(0);

        img.src = uri;
        filePreview.html(img);
    };
    reader.onerror = function (event) {
        console.error(event.target.error);
    };

    reader.readAsDataURL(file);
    return false;
};
fileInput.click(function () {
    fileField.click();
    return false;
});

formSubmit.click(sendPost(form, fileField, path, post => {
    window.location.href = `${path}res/${post.id}`;
}));

showPosts(postsArea, path, true)
    .then(result => {
        posts = result;
    });*/
