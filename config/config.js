module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "YOUR_USERNAME",
    "password": process.env.DB_PASSWORD,
    "database": "YOUR_DATABASE",
    "host": "YOUR_DATABASE_SERVER.database.windows.net",
    "dialect": "mssql"
  }
}
