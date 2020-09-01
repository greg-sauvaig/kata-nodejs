const { DAO } = require('./DAO');

class Authors extends DAO {
  /**
   * getAll to fecth all Books entries from the datastore
   * @return {[object Books]} a list of Books
   */
  async getAll() {
    return this.connection.select(
      [
        'Books.title',
        'Books.isbn',
        'Books.authors',
        'Books.description',
      ],
    ).from('Books');
  }
}

exports.Authors = Authors;
