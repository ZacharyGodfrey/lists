module.exports = {
    from: (expressResponse) => {
        return {
            success: (data) => {
                expressResponse.status(200).json({ data });
            },
            error: (message) => {
                expressResponse.status(500).json({
                    message: message || 'An error occurred while processing the request.'
                });
            },
            notFound: () => {
                expressResponse.status(404).json({
                    message: 'The requested resource was not found.'
                });
            },
        };
    },
};