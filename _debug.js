const router = require('./api/server/router');

const data = router.stack
.map(x => x.route)
.filter(x => x)
.map(x => Object.keys(x.methods).map(m => `${m}: ${x.path}`).join(' | '));

console.log(JSON.stringify(data, null, 2));