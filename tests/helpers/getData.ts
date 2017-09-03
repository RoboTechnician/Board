export default function <T>(path: string): Promise<T> {
    return fetch(path, {method: 'GET'})
        .then(response => response.json())
};