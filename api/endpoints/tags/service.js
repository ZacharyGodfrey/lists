

module.exports = {
    query: (query, res) => {
        res.status(200).json({
            success: true,
            data: { query },
            message: 'Query tags'
        });
    },
    getById: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Get tag by id'
        });
    },
    create: (data, res) => {
        res.status(200).json({
            success: true,
            data: { data },
            message: 'Create tag'
        });
    },
    update: (id, data, res) => {
        res.status(200).json({
            success: true,
            data: { id, data },
            message: 'Update tag'
        });
    },
    delete: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Delete tag'
        });
    },
};