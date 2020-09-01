const express = require('express');
const { Books } = require('../DAO/Books');
const { Authors } = require('../DAO/Authors');
const { Magazines } = require('../DAO/Magazines');
const { validateIsbnLikeInDataSet, validateEmail } = require('../utils/validators');
const { render } = require('../middlewares/render');
const { extension } = require('../middlewares/extension');

const exp = express();
const port = 3000;

const middlewares = [extension, render];

exp.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listening at http://localhost:${port}`);
});

exp.get('/', async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Hello world!');
  res.send('Hello world!');
});

/**
 * route to list all books
 * @param  {string} '/books' [URI of the route]
 *
 * @return {[books]} list of books objects found
 */
// eslint-disable-next-line no-useless-escape
exp.get('/books\.:ext?', middlewares, async (req, res) => {
  const books = new Books();
  const booksList = await books.getAll();
  res.render(booksList);
});

/**
 * route to list all magazines
 * @param  {string} '/magazines' [URI of the route]
 *
 * @return {[magazines]} list of magazines objects found
 */
// eslint-disable-next-line no-useless-escape
exp.get('/magazines\.:ext?', middlewares, async (req, res) => {
  const magazines = new Magazines();
  const magazinesList = await magazines.getAll();
  res.render(magazinesList);
});

/**
 * route to list all authors
 * @param  {string} '/authors' [URI of the route]
 *
 * @return {[authors]} list of authors objects found
 */
// eslint-disable-next-line no-useless-escape
exp.get('/authors\.:ext?', middlewares, async (req, res) => {
  const authors = new Authors();
  const authorsList = await authors.getAll();
  res.render(authorsList);
});

/**
 * route to find a book by its isbn
 * @param  {string} '/book/:isbn' International Standard Book Number
 * see: https://fr.wikipedia.org/wiki/International_Standard_Book_Number
 *
 * @return {object book} the book related to the isbn
 */
// eslint-disable-next-line no-useless-escape
exp.get('/book/:isbn\.:ext?', middlewares, async (req, res) => {
  const { isbn } = req.params;
  if (!validateIsbnLikeInDataSet(isbn)) {
    res.render([]);
    return;
  }
  const books = new Books();
  const book = await books.getOneByIsbn(isbn);
  res.render(book);
});

/**
 * route to find a magazine by its isbn
 * @param  {string} '/magazine/:isbn' International Standard Book Number
 * see: https://fr.wikipedia.org/wiki/International_Standard_Book_Number
 *
 * @return {object magazine} the magazine related to the isbn
 */
// eslint-disable-next-line no-useless-escape
exp.get('/magazine/:isbn\.:ext?', middlewares, async (req, res) => {
  const { isbn } = req.params;
  if (!validateIsbnLikeInDataSet(isbn)) {
    res.render([]);
    return;
  }
  const magazines = new Magazines();
  const magazinesList = await magazines.getOneByIsbn(isbn);
  res.render(magazinesList);
});

/**
 * route to find all books by its author email
 * @param  {string} '/books/author/:authorEmail' email of the author
 *
 * @return {[books]} the list of books written by the author referenced by it's email
 */
// eslint-disable-next-line no-useless-escape
exp.get('/author/:authorEmail/books\.:ext?', middlewares, async (req, res) => {
  const { authorEmail } = req.params;
  if (!validateEmail(authorEmail)) {
    res.render([]);
    return;
  }
  const books = new Books();
  const booksList = await books.getByAuthorEmail(authorEmail);
  res.render(booksList);
});

exports.app = () => exp;
