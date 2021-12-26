import * as api from './api.js';
import * as request from './requester.js';
export function getAllReviews() {
    return request.get(api.reviews);
}

export function createReview(data, token) {
    return fetch(api.reviews, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...data })

    }).then((res) => {
        return res.json();
    }).catch((error) => {
        console.log(error)
    });
};
export function editReview(id, data, token) {
    console.log(id)
    return fetch(api.reviews + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...data })

    }).then((res) => {
        return res.json();
    }).catch((error) => {
        console.log(error)
    });
};
export function getOneReview(id) {
    return request.get(api.reviews + `/${id}`);
}

export function remove(id, token) {
    return fetch(api.reviews + `/${id}`, {
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

