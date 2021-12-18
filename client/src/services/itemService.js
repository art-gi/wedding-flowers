import * as api from './api.js';
import * as request from './requester.js';

function create({title, description, type, image, price}) {
    return request.post(api.createItem, {title, description, type, image, price})
        .then(data => {
            console.log(data)
            return data;
        })
}
export default {
   create
}