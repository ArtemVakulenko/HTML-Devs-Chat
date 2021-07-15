const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
}, { collection: 'UnreadMesssages' });

const UnreadMesssages = model('UnreadMesssages', schema);

module.exports = UnreadMesssages;
