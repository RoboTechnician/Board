/*const showPosts = require('./handlers/showPosts');
const updatePosts = require('./handlers/updatePosts');
const hideForm = require('./handlers/hideForm');
const sendPost = require('./handlers/sendPost');
const linkHandler = require('./handlers/linkHandler');
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

let timer = new Timer(function () {
    return updatePosts(postsArea, posts, path, deleteAction)
        .then(result => {
            posts = result;
            $('.post-link').unbind('mouseenter');
            $('.post-link').mouseenter(linkHandler(postsArea, posts));
        });
}, 10, $('.timer'));

let update = $('.thread-buttons .update-button');
let autoupdate = $('.thread-buttons input[type="checkbox"]');

//------------------------------------------------------------------------------------------------------------------

startButtons.html('Reply');
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
    if (post.thread) {
        window.location.href = `${path}res/${post.id}`;
    } else {
        $('input[name="name"]', form).val('');
        $('input[name="theme"]', form).val('');
        $('textarea[name="text"]', form).val('');
        fileField.value = '';
        update.click();
        form.css('display', 'none');
    }
}));

update.click(function () {
    updatePosts(postsArea, posts, path, deleteAction)
        .then(result => {
            posts = result;
            $('.post-link').unbind('mouseenter');
            $('.post-link').mouseenter(linkHandler(postsArea, posts));
            if (autoupdate.checked) {
                timer.reset();
            }
        });
    return false;
});

autoupdate.click(function () {
    if (autoupdate[0].checked) {
        timer.start();
    } else {
        timer.stop()
    }
});

showPosts(postsArea, path)
    .then(result => {
        posts = result;
        $('.post-link').mouseenter(linkHandler(postsArea, posts));
        //ReactDOM.render(<MyComponent />, document.getElementsByClassName('posts')[0]);
    });

function deleteAction(post) {
    $(`#${post.id} .post-number`).html('delete');
}*/
