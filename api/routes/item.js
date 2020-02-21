const get = (req, res) => {
    return res.success({ request: req }, 'GET /item');
};

const post = (req, res) => {
    return res.success({ request: req }, 'POST /item');
};

module.exports = { get, post };