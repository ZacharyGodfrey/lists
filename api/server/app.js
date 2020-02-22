const express = require('express');
const app = express();

// Settings
app.set('json spaces', 2);

// Middleware
const middleware = require('./middleware');
middleware.addToApp(app);

// Routing
const router = require('./router');
app.use('/.netlify/functions/api', router);

module.exports = app;