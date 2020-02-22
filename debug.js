const router = require('./api/server/router');
const routes = router.stack
    .map(x => x.route)
    .filter(x => x)
    .map(x => Object.keys(x.methods).map(m => `${m}: ${x.path}`).join(' | '));

console.log('Registered Routes: ' + JSON.stringify(routes, null, 2));