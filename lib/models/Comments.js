const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  commentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },

});

module.exports = mongoose.model('User', schema);
