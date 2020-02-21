const get = (req, res) => {
    return res.success({ request: req }, 'GET /tag');
};

const post = (req, res) => {
    return res.success({ request: req }, 'POST /tag');
};

module.exports = { get, post };