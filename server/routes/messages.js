const { Router } = require('express');
const { Messages } = require('../controllers');
const { tokenValidation, url } = require('../helpers');

const route = Router();
const messages = new Messages();
const { getMessages, postMessage } = messages;

route.get(url.messages, tokenValidation, getMessages);
route.post(url.messages, tokenValidation, postMessage);

module.exports = route;
