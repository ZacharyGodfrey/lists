(() => {
    'use strict';

    const apiUrl = '/.netlify/functions/api';

    fetch(`${apiUrl}/index`).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
})();