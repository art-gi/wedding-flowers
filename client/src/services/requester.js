import authService from "./authService.js";
function request(method, url, data) {
    let options = {
        method
    }
    if (method !== 'GET') {
        options.headers = {
            'Content-Type': 'application/json',
        }
        options.body = JSON.stringify({...data})
       
    }
    return fetch(url, options)
        .then(res => {
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

