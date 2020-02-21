const path = require('path');
const fs = require('fs-extra');

const requestModel = require('./request-model');
const responseModel = require('./response-model');
const controllers = {
    index: require('../index/controller'),
    items: require('../items/controller'),
    lists: require('../lists/controller'),
    tags: require('../tags/controller'),
    users: require('../users/controller'),
};

module.exports = {
    handleEvent: (awsEvent) => {
        const request = requestModel.fromAWSEvent(awsEvent);

        if (Object.keys(controllers).includes(request.route)) {
            const controller = controllers[request.route];

            if (typeof controller[request.method] === 'function') {
                return controller[request.method](request, responseModel);
            } else {
                return responseModel.error(`Resource '${request.route}' does not support method '${request.method}'`);
            }
        } else {
            return responseModel.notFound();
        }
    }
};