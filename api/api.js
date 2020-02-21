const router = require('./utilities/router');

exports.handler = (event, context, callback) => {
    const response = router.handleEvent(event);

    callback(null, {
        statusCode: response.status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(response.body, null, 2)
    });
};