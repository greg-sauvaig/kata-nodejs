const { DAO } = require('./DAO');

class Books extends DAO {
  /**
   * getAll to fecth all Books entries from the datastore
   * @return {[object Books]} a list of Books object
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
  /**
   * getOneByIsbn to fetch one book based on its isbn
   * @param  {string} isbn identifier
   * @return {object} a Book entry
   */
  async getOneByIsbn(isbn) {
    return this.connection.select(
      [
        'Books.title',
        'Books.isbn',
        'Books.authors',
        'Books.description',
      ],
    ).from('Books')
      .where('isbn', isbn);
  }
  /**
   * getByAuthorEmail to fetch a list of books based on their author
   * @param  {string} authorEmail the email of the author
   * @return {[object Books]} a list of Book
   */
  async getByAuthorEmail(authorEmail) {
    return this.connection.select(
      [
        'Books.title',
        'Books.isbn',
        'Books.authors',
        'Books.description',
      ],
    ).from('Books')
      .where('authors', authorEmail);
  }
}

exports.Books = Books;
