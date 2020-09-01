const path = require('path');

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
    useNullAsDefault: true,
  },
  migrations: {
    directory: path.join(__dirname, '/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/seeds'),
  },
};
exports.config = config;
exports.default = config;
