

module.exports = {
    query: (query, res) => {
        res.status(200).json({
            success: true,
            data: { query },
            message: 'Query items'
        });
    },
    getById: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Get item by id'
        });
    },
    create: (data, res) => {
        res.status(200).json({
            success: true,
            data: { data },
            message: 'Create item'
        });
    },
    update: (id, data, res) => {
        res.status(200).json({
            success: true,
            data: { id, data },
            message: 'Update item'
        });
    },
    delete: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Delete item'
        });
    },
};