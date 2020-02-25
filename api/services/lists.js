

module.exports = {
    init: (logger, response) => {
        return {
            query: (query) => {
                logger.log(`Query lists: ${JSON.stringify(query)}`);

                response.success({
                    query,
                    message: 'Query lists',
                });
            },
            getById: (id) => {
                logger.log(`Get list: ${id}`);

                response.success({
                    id,
                    message: 'Get list by id'
                });
            },
            create: (data) => {
                logger.log(`Create list: ${JSON.stringify(data)}`);

                response.success({
                    data,
                    message: 'Create list'
                });
            },
            update: (id, data) => {
                logger.log(`Update list: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    data,
                    message: 'Update list'
                });
            },
            delete: (id) => {
                logger.log(`Delete list: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    message: 'Delete list'
                });
            },
        }
    },
};