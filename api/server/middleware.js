const bodyParser = require('body-parser');

module.exports = {
    addToApp: (app) => {
        // Body Parser Middleware
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // CORS Middleware
        app.use((req, res, next) => {
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