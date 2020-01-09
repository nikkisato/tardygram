const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Post = require('../models/Post');

module.exports = Router()
  .post('/posts', ensureAuth,  (req, res, next) => {
    Post    
      .create(req.body)
      .then(post => res.send(post))
      .catch(next);
  })

  .get('/posts', (req, res, next) => {
    Post    
      .find()
      .then(post => res.send(post))
      .catch(next);
  })

  .get('/posts/:id', ensureAuth, (req, res, next) => {
    Post 
      .findById(req.params.id)
      .then(post => res.send(post))
      .catch(next);
  })

  .patch('/posts/:id', ensureAuth,  (req, res, next) => {
    Post
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(post => res.send(post))
      .catch(next);
  })

  .delete('/posts/:id', ensureAuth, (req, res, next) => {
    Post 
      .findByIdAndRemove(req.params.id)
      .then(post =>  res.send(post)) 
      .catch(next); 

  });
