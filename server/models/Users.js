const { Schema, model } = require('mongoose');

const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  hobbie: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  age: {
    type: String,
    default: '',
  },
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Rooms' }],
}, { collection: 'users' });

const Users = model('Users', schema);

module.exports = Users;
