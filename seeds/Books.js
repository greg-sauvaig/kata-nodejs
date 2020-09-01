const csv = require('csv-parser');
const fs = require('fs');

/**
 * function to parse provided csv file and insert the data in the BDD
 * @param  {object} knex client
 * @return {promise}
 */
exports.seed = (knex) => {
  const books = [];
  fs.createReadStream('./data/books.csv')
    .pipe(
      csv({ separator: ';', header: ['title', 'isbn', 'authors', 'description'] }),
    )
    .on('data', (data) => {
      books.push(data);
    })
    .on('error', (error) => {
      console.warn('an error has occured when populating the Books table', error);
    })
    .on('end', () => {
      console.log('end parsing books csv data');
    });
  // Deletes all existing entries and truncate then insert
  return knex('Books').del()
    .then(() => knex('Books').truncate())
    .then(() => knex('Books').insert(books));
};
