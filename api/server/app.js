const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./logger');
const router = require('./router');

const app = express();

// Settings
app.set('json spaces', 2);

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        res.status(200).json('');
    } else {
        next();
    }
});

// Logging
app.use((req, _, next) => {
    logger.log(`${req.method} Request: ${req.url}`);

    next();
});

// Routing
app.use('/.netlify/functions/api', router.from(express.Router()));

module.exports = app;