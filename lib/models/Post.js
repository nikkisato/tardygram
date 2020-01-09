const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
  },
  photoUrl:  {
    type: String,
    required: true
  },

  caption:  {
    type: String,
    required: true
  },

  tags: [Array]

});

module.exports = mongoose.model('Post', schema);
