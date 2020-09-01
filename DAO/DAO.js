const { knex } = require('../knexClient');

class DAO {
	/**
	 * constructor to set up connection to the datastore for the children
	 */
  constructor() {
    this.connection = knex;
  }
}

exports.DAO = DAO;
