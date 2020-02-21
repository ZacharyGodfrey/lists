module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('users/service.getById not implemented yet');
        },
        query: (query) => {
            return res.error('users/service.query not implemented yet');
        },
        create: (data) => {
            return res.error('users/service.create not implemented yet');
        },
        update: (data) => {
            return res.error('users/service.update not implemented yet');
        },
        delete: (data) => {
            return res.error('users/service.delete not implemented yet');
        },
    };
};