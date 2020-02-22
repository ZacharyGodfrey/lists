

module.exports = {
    query: (query, res) => {
        res.status(200).json({
            success: true,
            data: { query },
            message: 'Query users'
        });
    },
    getById: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Get user by id'
        });
    },
    create: (data, res) => {
        res.status(200).json({
            success: true,
            data: { data },
            message: 'Create user'
        });
    },
    update: (id, data, res) => {
        res.status(200).json({
            success: true,
            data: { id, data },
            message: 'Update user'
        });
    },
    delete: (id, res) => {
        res.status(200).json({
            success: true,
            data: { id },
            message: 'Delete user'
        });
    },
};