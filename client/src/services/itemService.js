import * as api from './api.js';
import * as request from './requester.js';
function getAll() {
    return request.get(api.item);
}

function create({ title, description, type, image, price }) {
    return request.post(api.item, { title, description, type, image, price })
        .then(data => {
            console.log(data)
            return data;
        });
}
export default {
    create,
    getAll
}