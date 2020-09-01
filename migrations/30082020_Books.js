/**
 * function to create Books table in BDD
 * @param  {object} knex client
 * @return {promise}
 */
const createTableBooks = (knex) => knex.schema.createTable(
  'Books',
  (table) => {
    table.increments();
    table.text('title').notNullable();
    table.string('isbn').notNullable();
    table.string('authors').notNullable();
    table.text('description').notNullable();
  },
)
  .then(() => {
    console.log('table Books successfully created');
  })
  .catch((error) => {
    console.warn('an error occured creating the table Books', error);
  });

/**
 * function to wrap create table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const up = (knex) => createTableBooks(knex);

/**
 * function to wrap delete table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const down = (knex) => knex.schema.dropTable('Books');

exports.up = up;
exports.down = down;
