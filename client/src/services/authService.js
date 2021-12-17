import * as api from './api.js';
import * as request from './requester.js';

function login(email, password) {
    return request.post(api.login, { email, password })
        .then(user => {
            setUser(user);
            return user;
        })
}
function register(email, password) {
    return request.post(api.register, { email, password })
        .then(user => {
            
            return user;
        })
}

function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}
function getUser() {
    return localStorage.getItem('user') !== null
        ? JSON.parse(localStorage.getItem('user'))
        : undefined
}
function logout() {
    return request.get(api.logout)
        .then(() => {
            localStorage.removeItem('user');
        })
}

export default {
    login,
    register,
    setUser,
    getUser,
    logout,
}