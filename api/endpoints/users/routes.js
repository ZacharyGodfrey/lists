const service = require('./service');

module.exports = (router) => {
    router.get('/users', (req, res) => {
        service.query(req.query, res);
    });

    router.get('/users/:id', (req, res) => {
        service.getById(req.params.id, res);
    });

    router.post('/users', (req, res) => {
        service.create(req.body, res);
    });

    router.put('/users/:id', (req, res) => {
        service.update(req.params.id, req.body, res);
    });

    router.delete('/users/:id', (req, res) => {
        service.delete(req.params.id, res);
    });
};