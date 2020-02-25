const services = require('../services');
const response = require('./response');
const logger = require('./logger');

module.exports = {
    from: (expressRouter) => {
        // Root endpoint
        expressRouter.get('/', (_, res) => {
            response.from(res).success({
                serverTime: new Date().toISOString()
            });
        });

        // Get many endpoint
        expressRouter.get('/:service', (req, res, next) => {
            try {
                if (services[req.params.service]) {
                    const service = services[req.params.service].init(logger);

                    service.query(req.query, response.from(res));
                } else {
                    next();
                }
            } catch (error) {
                response.from(res).error(error.message);
            }
        });

        // Get single endpoint
        expressRouter.get('/:service/:id', (req, res, next) => {
            try {
                if (services[req.params.service]) {
                    const service = services[req.params.service].init(logger);

                    service.getById(req.params.id, response.from(res));
                } else {
                    next();
                }
            } catch (error) {
                response.from(res).error(error.message);
            }
        });

        // Create endpoint
        expressRouter.post('/:service', (req, res, next) => {
            try {
                if (services[req.params.service]) {
                    const service = services[req.params.service].init(logger);

                    service.create(req.body, response.from(res));
                } else {
                    next();
                }
            } catch (error) {
                response.from(res).error(error.message);
            }
        });

        // Update endpoint
        expressRouter.put('/:service/:id', (req, res, next) => {
            try {
                if (services[req.params.service]) {
                    const service = services[req.params.service].init(logger);

                    service.update(req.params.id, req.body, response.from(res));
                } else {
                    next();
                }
            } catch (error) {
                response.from(res).error(error.message);
            }
        });

        // Delete endpoint
        expressRouter.delete('/:service/:id', (req, res, next) => {
            try {
                if (services[req.params.service]) {
                    const service = services[req.params.service].init(logger);

                    service.delete(req.params.id, response.from(res));
                } else {
                    next();
                }
            } catch (error) {
                response.from(res).error(error.message);
            }
        });

        // Standard 404 response
        expressRouter.use((_, res) => {
            response.from(res).notFound();
        });

        return expressRouter;
    },
};