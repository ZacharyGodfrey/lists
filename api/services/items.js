

module.exports = {
    init: (logger, response) => {
        return {
            query: (query) => {
                logger.log(`Query items: ${JSON.stringify(query)}`);

                response.success({
                    query,
                    message: 'Query items',
                });
            },
            getById: (id) => {
                logger.log(`Get item: ${id}`);

                response.success({
                    id,
                    message: 'Get item by id'
                });
            },
            create: (data) => {
                logger.log(`Create item: ${JSON.stringify(data)}`);

                response.success({
                    data,
                    message: 'Create item'
                });
            },
            update: (id, data) => {
                logger.log(`Update item: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    data,
                    message: 'Update item'
                });
            },
            delete: (id) => {
                logger.log(`Delete item: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    message: 'Delete item'
                });
            },
        }
    },
};