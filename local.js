const express = require('express');

const port = require('yargs').argv.port || process.env.PORT || 8080;

const app = require('./api/server/app');

app.use(express.static('./dist'));

app.listen(port, () => console.log(`Site is running at http://localhost:${port}`));