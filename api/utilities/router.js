const path = require('path');
const fs = require('fs-extra');

const requestModel = require('./request-model');
const responseModel = require('./response-model');

const routeExists = (routeName) => {
    const routeFile = path.resolve(`${__dirname}/../routes/${routeName}.js`);

    return fs.existsSync(routeFile);
};

const methodExists = (route, methodName) => {
    return typeof route[methodName] === 'function';
};

module.exports = {
    handleEvent: (awsEvent) => {
        const request = requestModel.fromAWSEvent(awsEvent);
        const routeName = request.route;
        const methodName = request.method;

        return responseModel.success({
            request,
            routeName,
            methodName,
            routeExists: routeExists(routeName),
        });

        if (routeExists(routeName)) {
            const route = require(`../routes/${routeName}`);

            if (methodExists(route, methodName)) {
                return route[methodName](request, responseModel);
            } else {
                return responseModel.error(`Resource '${routeName}' does not support method '${methodName}'`);
            }
        } else {
            return responseModel.notFound();
        }
    }
};