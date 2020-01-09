const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');

const User = require('../models/User');

const MAX_AGE_IN_MS = 24 * 60 * 60 * 1000;

const setSessionCookie = (res, token) => {
  res.cookie('session', token, {
    maxAge: MAX_AGE_IN_MS
  });
};


module.exports = Router()
  .post('/auth/signup', (req, res, next) => {
    User
      .create(req.body)
      .then(user => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })

  .post('/auth/login', (req, res, next) => {
    User
      .authorize(req.body)
      .then(user => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })


  .post('/auth/logout', (req, res) => {
    
    res.clearCookie('session', {
      maxAge: MAX_AGE_IN_MS
    });
  })
  .get('/auth/verify', ensureAuth, (req, res) => {
    res.send(req.user);
  });
  
