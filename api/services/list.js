module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('services/list.getById not implemented yet');
        },
        query: (query) => {
            return res.error('services/list.query not implemented yet');
        },
        create: (data) => {
            return res.error('services/list.create not implemented yet');
        },
        update: (data) => {
            return res.error('services/list.update not implemented yet');
        },
        delete: (data) => {
            return res.error('services/list.delete not implemented yet');
        },
    };
};