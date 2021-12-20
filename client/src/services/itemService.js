import * as api from './api.js';
import * as request from './requester.js';
function getAll() {
    return request.get(api.items);
}

function create({ title, description, type, image, price }) {
    return request.post(api.items, { title, description, type, image, price })
        .then((data) => {
            console.log(data)
            return data;
        });
}
function getOne(itemId) {
    return request.get(api.items +`/${itemId}`);
}
export default {
    create,
    getAll,
    getOne
}