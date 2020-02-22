const express = require('express');

const router = express.Router();

// Default endpoint
router.get('/', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toISOString()
    });
});

// Application endpoints
require('../endpoints/items/routes')(router);
require('../endpoints/lists/routes')(router);
require('../endpoints/tags/routes')(router);
require('../endpoints/users/routes')(router);

// Standard 404 response
router.use((req, res) => {
    res.status(404).json({
        message: 'The requested resource was not found.'
    });
});

module.exports = router;