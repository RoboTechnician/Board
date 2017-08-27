module.exports = function hideForm(placeSel, formSel, callback) {
    return function () {
        let form = $(formSel);
        let place = $(placeSel);

        if (!place.contents().is(form)) {
            form = form.detach();
            place.append(form);
            form.css('display', '');
        } else {
            if (form.css('display') === 'none') {
                form.css('display', '');
            } else {
                form.css('display', 'none');
            }
        }
        if (callback) {
            callback();
        }
        return false;
    };
};