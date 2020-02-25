

module.exports = {
    init: (logger, response) => {
        return {
            query: (query) => {
                logger.log(`Query tags: ${JSON.stringify(query)}`);

                response.success({
                    query,
                    message: 'Query tags',
                });
            },
            getById: (id) => {
                logger.log(`Get tag: ${id}`);

                response.success({
                    id,
                    message: 'Get tag by id'
                });
            },
            create: (data) => {
                logger.log(`Create tag: ${JSON.stringify(data)}`);

                response.success({
                    data,
                    message: 'Create tag'
                });
            },
            update: (id, data) => {
                logger.log(`Update tag: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    data,
                    message: 'Update tag'
                });
            },
            delete: (id) => {
                logger.log(`Delete tag: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    message: 'Delete tag'
                });
            },
        }
    },
};