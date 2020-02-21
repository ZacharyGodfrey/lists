const service = require('./service');

module.exports = {
    get: (req, res) => {
        if (req.queryParameters.id) {
            return service(res).getById(req.queryParameters.id);
        } else {
            return service(res).query(req.queryParameters);
        }
    },
    post: (req, res) => service(res).create(req.body),
    put: (req, res) => service(res).update(req.body),
    delete: (req, res) => service(res).delete(req.body),
};