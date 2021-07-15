const { Schema, model } = require('mongoose');

const schema = new Schema({
  author: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Rooms',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { collection: 'messages' });

const Messages = model('Messages', schema);

module.exports = Messages;
