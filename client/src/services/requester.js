import authService from "./authService.js";
function request(method, url, data) {
    let options = {
        method
    }
    if (method !== 'GET') {
        options.headers = {
            'Content-Type': 'application/json',
        }
        options.body = JSON.stringify(data)
    }

    let user = authService.getUser()
    console.log(user)
    if (user) {
        options.headers += { 'X-Authorization': user.accessToken }
        console.log(options.headers, options.method, options.body)
    }
    return fetch(url, options)
        .then(res => {
            console.log(res)
            if (res.url.endsWith('logout')) {
                return res;
            }
            return res.json()
        }).catch((error) => console.log(error))

}
export let get = request.bind(null, "GET");
export let post = request.bind(null, "POST")
export let put = request.bind(null, "PUT");
export let del = request.bind(null, "DELETE");

