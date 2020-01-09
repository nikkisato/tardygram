const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  commentBy: {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
  },
  post: {
    ref: 'Post',
    localField: '_id',
    foreignField: 'user',
  },

});

module.exports = mongoose.model('User', schema);
