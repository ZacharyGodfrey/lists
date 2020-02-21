const get = (req, res) => {
    return res.success({
        request: req,
        serverTime: new Date().toISOString()
    });
};

module.exports = { get };