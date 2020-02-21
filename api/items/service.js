module.exports = (res) => {
    return {
        getById: (id) => {
            return res.error('items/service.getById not implemented yet');
        },
        query: (query) => {
            return res.error('items/service.query not implemented yet');
        },
        create: (data) => {
            return res.error('items/service.create not implemented yet');
        },
        update: (data) => {
            return res.error('items/service.update not implemented yet');
        },
        delete: (data) => {
            return res.error('items/service.delete not implemented yet');
        },
    };
};