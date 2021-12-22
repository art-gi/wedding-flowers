import * as api from './api.js';
import * as request from './requester.js';
function getAll() {
    return request.get(api.reviews);
}

function create(data, token) {
    return fetch(api.reviews, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...data })

    }).then((res) => {
        console.log
        return res.json();
    }).catch((error) => {
        console.log(error)
    });
};
function edit(id, data) {
    console.log(id)
    return fetch(api.reviews + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data })

    }).then((res) => {
        return res.json();
    }).catch((error) => {
        console.log(error)
    });
};
function getOne(id) {
    return request.get(api.reviews + `/${id}`);
}
function remove(id, token) {
    return fetch(api.items + `/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        }
    }).then((res) => {
        return res.json();
    }).catch((error) => {
        console.log(error)
    }); 
}

export default {
    create,
    getAll,
    getOne,
    remove,
    edit
}