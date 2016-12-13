const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
router.get('/books', (req, res, next) => {
  knex('books')
    .orderBy('title')
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => {
      next(err);
    });
});
router.get('/books/:id', (req, res, next) => {
  knex('books')
    .where('id', req.params.id)
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => {
      next(err);
    });
});
router.post('/books', (req, res, next) => {
  knex('books')
    .insert({ title: req.body.title, author: req.body.author, genre: req.body.genre, description: req.body.description, cover_url: req.body.cover_url  }, '*')
    .then((books) => {
      res.send(books[0]);
    })
    .catch((err) => {
      next(err);
    });
});
router.patch('/books/:id', (req, res, next) => {
    for (var i = 0; i < req.body.length; i++) {
      console.log(req.body[i]);
    };
    res.send('length' + req.body);
});
router.delete('/books/:id', (req, res, next) => {

});

module.exports = router;
