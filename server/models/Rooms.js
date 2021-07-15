const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '',
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Messages',
    required: true,
  }],
}, { collection: 'rooms' });

const Rooms = model('Rooms', schema);

module.exports = Rooms;
