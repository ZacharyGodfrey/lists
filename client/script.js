(() => {
    'use strict';

    const http = (() => {
        const queryString = (data) => Object.keys(parameters).map(key => `${key}=${data[key]}`).join('&');

        const request = (method, url, data) => {
            switch (method) {
                case 'GET':
                case 'DELETE':
                    return new Request(`${url}?${queryString(data)}`, { method });

                case 'POST':
                case 'PUT':
                    return new Request(fullUrl, {
                        method: method,
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(data, null, 2)
                    });

                default:
                    throw new Error(`Bad HTTP method: ${method}`);
            }
        };

        return {
            get: (url, data) => fetch(request('GET', url, data)).then(res => res.json()),
            post: (url, data) => fetch(request('POST', url, data)).then(res => res.json()),
            put: (url, data) => fetch(request('PUT', url, data)).then(res => res.json()),
            delete: (url, data) => fetch(request('DELETE', url, data)).then(res => res.json()),
        }
    })();

    const apiUrl = '/.netlify/functions/api';

    const requests = [
        http.get(`${apiUrl}/index`),
        // item
        http.get(`${apiUrl}/item`, { id: 1 }),
        http.get(`${apiUrl}/item`, { prop: 'val' }),
        http.post(`${apiUrl}/item`, { prop: 'val' }),
        http.put(`${apiUrl}/item`, { id: 1, prop: 'val' }),
        http.delete(`${apiUrl}/item`, { id: 1 }),
        // list
        http.get(`${apiUrl}/list`, { id: 1 }),
        http.get(`${apiUrl}/list`, { prop: 'val' }),
        http.post(`${apiUrl}/list`, { prop: 'val' }),
        http.put(`${apiUrl}/list`, { id: 1, prop: 'val' }),
        http.delete(`${apiUrl}/list`, { id: 1 }),
        // tag
        http.get(`${apiUrl}/tag`, { id: 1 }),
        http.get(`${apiUrl}/tag`, { prop: 'val' }),
        http.post(`${apiUrl}/tag`, { prop: 'val' }),
        http.put(`${apiUrl}/tag`, { id: 1, prop: 'val' }),
        http.delete(`${apiUrl}/tag`, { id: 1 }),
        // user
        http.get(`${apiUrl}/user`, { id: 1 }),
        http.get(`${apiUrl}/user`, { prop: 'val' }),
        http.post(`${apiUrl}/user`, { prop: 'val' }),
        http.put(`${apiUrl}/user`, { id: 1, prop: 'val' }),
        http.delete(`${apiUrl}/user`, { id: 1 }),
    ].map(request => request.then(data => console.log(data)));
})();