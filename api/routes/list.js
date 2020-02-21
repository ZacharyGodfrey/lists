const get = (req, res) => {
    return res.success({ request: req }, 'GET /list');
};

const post = (req, res) => {
    return res.success({ request: req }, 'POST /list');
};

module.exports = { get, post };