// Update with your config settings.
import path from 'path';

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'student',
      user: 'postgres',
      password: 'root',
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
};
