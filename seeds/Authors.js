const csv = require('csv-parser');
const fs = require('fs');

/**
 * function to parse provided csv file and insert the data in the BDD
 * @param  {object} knex client
 * @return {promise}
 */
exports.seed = (knex) => {
  const authors = [];
  fs.createReadStream('./data/authors.csv')
    .pipe(
      csv({ separator: ';', header: ['email', 'firstname', 'lastname'] }),
    )
    .on('data', (data) => {
      authors.push(data);
    })
    .on('error', (error) => {
      console.warn('an error has occured when populating the Authors table', error);
    })
    .on('end', () => {
      console.log('end parsing Authors csv data');
    });
  // Deletes all existing entries and truncate then insert
  return knex('Authors').del()
    .then(() => knex('Authors').truncate())
    .then(() => knex('Authors').insert(authors));
};
