const knex = require('knex');
const { config } = require('./knexfile');

exports.default = knex(config.development);
exports.knex = knex(config.development);
