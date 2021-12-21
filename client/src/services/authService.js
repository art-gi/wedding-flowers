import * as api from './api.js';
import * as request from './requester.js';

function login(email, password) {
    return request.post(api.login, {email, password})
        .then(user => {
            console.log(user)
            return user;
        })
}
function register(email, password) {
    return request.post(api.register, {email, password})
        .then(user => {
            console.log(user)
            return user;
        })
};

/* function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}
function getUser() {
    return localStorage.getItem('user') !== null
        ? JSON.parse(localStorage.getItem('user'))
        : undefined 
}*/
function logout(token) {
    return fetch(api.logout, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });  
};

export default {
    login,
    register,
    logout
}