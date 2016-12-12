const data = require('../config/books.js');

exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
   knex('books').del()
  .then(() => Promise.all([
      // Inserts seed entries
    knex('books').insert(data.books),
  ]));
