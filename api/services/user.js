module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('services/user.getById not implemented yet');
        },
        query: (query) => {
            return res.error('services/user.query not implemented yet');
        },
        create: (data) => {
            return res.error('services/user.create not implemented yet');
        },
        update: (data) => {
            return res.error('services/user.update not implemented yet');
        },
        delete: (data) => {
            return res.error('services/user.delete not implemented yet');
        },
    };
};