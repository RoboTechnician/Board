module.exports = function sendPost(formSel, fileField, path, callback) {
    return function () {
        let form = $(formSel);
        let text = $('textarea[name="text"]', form).val();
        if (!text) return false;

        let file = fileField.files[0];
        if (!file)
            file = '';
        let theme = $('input[name="theme"]', form).val();
        let name = $('input[name="name"]', form).val();

        let formData = new FormData();
        formData.append('name', $('<div/>').text(name).html());
        formData.append('theme', $('<div/>').text(theme).html());
        formData.append('text', $('<div/>').text(text).html());
        formData.append('file', file);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', path, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            callback(JSON.parse(xhr.responseText));
        };
        xhr.send(formData);
        return false;
    }
};
