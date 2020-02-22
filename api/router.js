const express = require('express');
const glob = require('glob');

const router = express.Router();

// Default endpoint
router.get('/', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toISOString()
    });
});

// Endpoint discovery
const endpoints = glob.sync('./endpoints/**/routes.js', { cwd: __dirname });

endpoints.forEach(fileName => {
    const addRoutes = require(fileName);

    addRoutes(router);
});

// Standard 404 response
router.use((req, res) => {
    res.status(404).json({
        message: 'The requested resource was not found.'
    });
});

module.exports = router;