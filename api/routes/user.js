const get = (req, res) => {
    return res.success({ request: req }, 'GET /user');
};

const post = (req, res) => {
    return res.success({ request: req }, 'POST /user');
};

module.exports = { get, post };