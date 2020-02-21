module.exports = {
    success: (data, message) => ({
        status: 200,
        body: {
            success: true,
            data: data,
            message: message || ''
        }
    }),
    notFound: () => ({
        status: 404,
        body: {
            success: false,
            data: null,
            message: 'The requested resource was not found.'
        }
    }),
    error: (message) => ({
        status: 500,
        body: {
            success: false,
            data: null,
            message: message || 'An error occurred.'
        }
    }),
};