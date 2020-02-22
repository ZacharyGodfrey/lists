const service = require('./service');

module.exports = (router) => {
    router.get('/tags', (req, res) => {
        service.query(req.query, res);
    });

    router.get('/tags/:id', (req, res) => {
        service.getById(req.params.id, res);
    });

    router.post('/tags', (req, res) => {
        service.create(req.body, res);
    });

    router.put('/tags/:id', (req, res) => {
        service.update(req.params.id, req.body, res);
    });

    router.delete('/tags/:id', (req, res) => {
        service.delete(req.params.id, res);
    });
};