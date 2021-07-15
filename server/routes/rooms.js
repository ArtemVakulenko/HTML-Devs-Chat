const { Router } = require('express');
const { Room } = require('../controllers');
const { tokenValidation, url } = require('../helpers');

const route = Router();
const room = new Room();
const { getRoom, createRoom, updateRoom, deleteUserFromRoom } = room;

route.get(url.room, tokenValidation, getRoom);
route.post(url.room, tokenValidation, createRoom);
route.put(url.room, tokenValidation, updateRoom);
route.delete(url.room, tokenValidation, deleteUserFromRoom);

module.exports = route;
