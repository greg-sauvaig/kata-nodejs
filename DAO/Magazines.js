const { DAO } = require('./DAO');

class Magazines extends DAO {
  /**
   * getAll to fetch all the magazines from the datastore
   * @return {[object Magazines]} a collection of magazines object
   */
  async getAll() {
    return this.connection.select(
      [
        'Magazines.title',
        'Magazines.isbn',
        'Magazines.authors',
        'Magazines.publishedAt',
      ],
    ).from('Magazines');
  }
  /**
   * getOneByIsbn to fetch one magazines from the datastore based on its isbn
   * @return {object Magazines} a magazines object
   */
  async getOneByIsbn(isbn) {
    return this.connection.select(
      [
        'Magazines.title',
        'Magazines.isbn',
        'Magazines.authors',
        'Magazines.publishedAt',
      ],
    ).from('Magazines')
      .where('isbn', isbn);
  }
}

exports.Magazines = Magazines;
