module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "Natalie",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database",
    "host": "fifty-states-visited-database-server-natalie.database.windows.net",
    "dialect": "mssql"
  }
}
