function request(method, url, data) {
    console.log(url)
    let options = {
        method
    }
    if (method !== 'GET') {
        options.headers = {
            'Content-Type': 'application/json',
        }
        console.log(data)
        options.body = JSON.stringify({...data})
       console.log(options)
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

