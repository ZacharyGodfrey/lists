

module.exports = {
    init: (logger, response) => {
        return {
            query: (query) => {
                logger.log(`Query users: ${JSON.stringify(query)}`);

                response.success({
                    query,
                    message: 'Query users',
                });
            },
            getById: (id) => {
                logger.log(`Get user: ${id}`);

                response.success({
                    id,
                    message: 'Get user by id'
                });
            },
            create: (data) => {
                logger.log(`Create user: ${JSON.stringify(data)}`);

                response.success({
                    data,
                    message: 'Create user'
                });
            },
            update: (id, data) => {
                logger.log(`Update user: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    data,
                    message: 'Update user'
                });
            },
            delete: (id) => {
                logger.log(`Delete user: ${id}, ${JSON.stringify(data)}`);

                response.success({
                    id,
                    message: 'Delete user'
                });
            },
        }
    },
};