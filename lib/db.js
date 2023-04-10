const pgPromise = require('pg-promise')();
const connectionString = process.env.DATABASE_URL;

let dbInstance;

function getDbInstance() {
  if (!dbInstance) {
    dbInstance = pgPromise(connectionString);
  }

  return dbInstance;
}

module.exports = getDbInstance;
