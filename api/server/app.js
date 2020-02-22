const express = require('express');

const app = express();
const middleware = require('./middleware');
const router = require('./router');

middleware.addToApp(app);

app.use('/.netlify/functions/api', router);

module.exports = app;