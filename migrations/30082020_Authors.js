/**
 * function to create Author table in BDD
 * @param  {object} knex client
 * @return {promise}
 */
const createTableAuthors = (knex) => knex.schema.createTable(
  'Authors',
  (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
  },
)
  .then(() => {
    console.log('table Authors successfully created');
  })
  .catch((error) => {
    console.warn('an error occured creating the table Authors', error);
  });

/**
 * function to wrap create table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const up = (knex) => createTableAuthors(knex);

/**
 * function to wrap delete table with knex
 * @param  {object} knex client
 * @return {promise}
 */
const down = (knex) => knex.schema.dropTable('Authors');

exports.up = up;
exports.down = down;
