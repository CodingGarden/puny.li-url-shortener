const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost/puny-li';
const db = monk(connectionURL);

module.exports = db;