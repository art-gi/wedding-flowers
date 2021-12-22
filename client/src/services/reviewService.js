import * as api from './api.js';
import * as request from './requester.js';
 export function getAllReviews() {
    return request.get('http://localhost:3030/jsonstore/reviews');
}

export function createReview(data, token) {
    return fetch('http://localhost:3030/jsonstore/reviews', {
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

