export default function (path) {
    return fetch(path, {method: 'GET'})
        .then(response => {
            return response.json();
        });
};