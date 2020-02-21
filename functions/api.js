const API = require('../api');

exports.handler = (event, context, callback) => {
    const response = API.handleEvent(event);

    callback(null, {
        statusCode: response.status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(response.body, null, 2)
    });
};