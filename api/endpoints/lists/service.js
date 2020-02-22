

module.exports = {
    query: (query, res) => {
        res.status(200).json({
            success: true,
            data: { query },
            message: 'Query lists'
        });
    },
    getById: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Get list by id'
        });
    },
    create: (data, res) => {
        res.status(200).json({
            success: true,
            data: { data },
            message: 'Create list'
        });
    },
    update: (id, data, res) => {
        res.status(200).json({
            success: true,
            data: { id, data },
            message: 'Update list'
        });
    },
    delete: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Delete list'
        });
    },
};