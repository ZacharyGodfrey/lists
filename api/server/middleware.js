const bodyParser = require('body-parser');

module.exports = {
    addToServer: (server) => {
        // Body Parser Middleware
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());

        // CORS Middleware
        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', '*');

            if (req.method === 'OPTIONS'){
                res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                return res.status(200).json('');
            }

            next();
        });
    }
};