export default function (path, data) {
    return fetch(path, {
        method: 'POST',
        body: data
    }).then(response => {
        return response.json();
    });
};