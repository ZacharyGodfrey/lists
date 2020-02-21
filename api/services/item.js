module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('services/item.getById not implemented yet');
        },
        query: (query) => {
            return res.error('services/item.query not implemented yet');
        },
        create: (data) => {
            return res.error('services/item.create not implemented yet');
        },
        update: (data) => {
            return res.error('services/item.update not implemented yet');
        },
        delete: (data) => {
            return res.error('services/item.delete not implemented yet');
        },
    };
};