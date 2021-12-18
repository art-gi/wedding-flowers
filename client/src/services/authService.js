import * as api from './api.js';
import * as request from './requester.js';

function login(userInfo) {

    return request.post(api.login, userInfo)
        .then(user => {
            console.log(user)
            setUser(user);
            return user;
        })
}
function register(userInfo) {
    return request.post(api.register, userInfo)
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