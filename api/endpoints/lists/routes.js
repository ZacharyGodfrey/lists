const service = require('./service');

module.exports = (router) => {
    router.get('/lists', (req, res) => {
        service.query(req.query, res);
    });

    router.get('/lists/:id', (req, res) => {
        service.getById(req.params.id, res);
    });

    router.post('/lists', (req, res) => {
        service.create(req.body, res);
    });

    router.put('/lists/:id', (req, res) => {
        service.update(req.params.id, req.body, res);
    });

    router.delete('/lists/:id', (req, res) => {
        service.delete(req.params.id, res);
    });
};