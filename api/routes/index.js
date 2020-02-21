module.exports = {
    get: (req, res) => {
        return res.success({
            serverTime: new Date().toISOString(),
            request: req
        });
    }
};