const service = require('./service');

module.exports = (router) => {
    router.get('/items', (req, res) => {
        service.query(req.query, res);
    });

    router.get('/items/:id', (req, res) => {
        service.getById(req.params.id, res);
    });

    router.post('/items', (req, res) => {
        service.create(req.body, res);
    });

    router.put('/items/:id', (req, res) => {
        service.update(req.params.id, req.body, res);
    });

    router.delete('/items/:id', (req, res) => {
        service.delete(req.params.id, res);
    });
};