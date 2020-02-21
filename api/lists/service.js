module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('lists/service.getById not implemented yet');
        },
        query: (query) => {
            return res.error('lists/service.query not implemented yet');
        },
        create: (data) => {
            return res.error('lists/service.create not implemented yet');
        },
        update: (data) => {
            return res.error('lists/service.update not implemented yet');
        },
        delete: (data) => {
            return res.error('lists/service.delete not implemented yet');
        },
    };
};