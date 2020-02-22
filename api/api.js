const express = require('express');
const serverless = require('serverless-http');

const server = express();
const middleware = require('./server/middleware');
const router = require('./server/router');

middleware.addToServer(server);

server.use('/.netlify/functions/api', router);

module.exports.handler = serverless(server);