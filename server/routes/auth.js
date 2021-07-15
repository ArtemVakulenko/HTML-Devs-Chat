const { Router } = require('express');
const { Auth } = require('../controllers');
const { authValidation, url, tokenValidation } = require('../helpers');

const route = Router();
const auth = new Auth();
const { registration, login, getAllUsers, updateUser, getOneUser } = auth;

route.post(url.reg, authValidation, registration);
route.post(url.log, authValidation, login);
route.get(url.users, tokenValidation, getAllUsers);
route.put(url.users, tokenValidation, updateUser);
route.get(url.user, tokenValidation, getOneUser);
module.exports = route;
