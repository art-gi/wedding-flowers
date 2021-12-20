import * as api from './api.js';
import * as request from './requester.js';
function getAll() {
    return request.get(api.items);
}

function create(itemData, token) {
    return request.post(api.items, itemData, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...itemData })
    })
        .then((res) => {
            console.log(res)
            res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};
function getOne(itemId) {
    return request.get(api.items + `/${itemId}`);
}
export default {
    create,
    getAll,
    getOne
}