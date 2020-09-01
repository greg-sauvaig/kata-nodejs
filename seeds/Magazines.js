const csv = require('csv-parser');
const fs = require('fs');

/**
 * function to parse provided csv file and insert the data in the BDD
 * @param  {object} knex client
 * @return {promise}
 */
exports.seed = (knex) => {
  const magazines = [];
  fs.createReadStream('./data/magazines.csv')
    .pipe(
      csv({ separator: ';', header: ['title', 'isbn', 'authors', 'publishedAt'] }),
    )
    .on('data', (data) => {
      magazines.push(data);
    })
    .on('error', (error) => {
      console.warn('an error has occured when populating the Magazines table', error);
    })
    .on('end', () => {
      console.log('end parsing magazines csv data');
    });
  // Deletes all existing entries and truncate then insert
  return knex('Magazines').del()
    .then(() => knex('Magazines').truncate())
    .then(() => knex('Magazines').insert(magazines));
};
