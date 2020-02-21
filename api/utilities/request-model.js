module.exports = {
    fromAWSEvent: (awsEvent) => {
        const pathSegments = awsEvent.path.split('/');
        const base64Decode = (data) => new Buffer(data, 'base64').toString('ascii');

        return {
            route: pathSegments.length < 5 ? 'index' : pathSegments[4].toLowerCase(),
            method: awsEvent.httpMethod.toLowerCase(),
            headers: awsEvent.headers,
            body: awsEvent.isBase64Encoded ? base64Decode(awsEvent.body) : awsEvent.body,
            query: awsEvent.queryStringParameters
        };
    }
};