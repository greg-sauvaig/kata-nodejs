/**
 * function to create Magazines table in BDD
 * @param  {object} knex client
 * @return {promise}
 */
const createTableMagazines = (knex) => knex.schema.createTable(
  'Magazines',
  (table) => {
    table.increments();
    table.text('title').notNullable();
    table.string('isbn').notNullable();
    table.string('authors').notNullable();
    table.date('publishedAt').notNullable();
  },
)
  .then(() => {
    console.log('table Magazines successfully created');
  })
  .catch((error) => {
    console.warn('an error occured creating the table Magazines', error);
  });

/**
 * function to wrap create table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const up = (knex) => createTableMagazines(knex);

/**
 * function to wrap delete table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const down = (knex) => knex.schema.dropTable('Magazines');

exports.up = up;
exports.down = down;
