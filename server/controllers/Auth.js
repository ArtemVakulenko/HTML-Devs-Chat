require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { messages } = require('../helpers');
const { Users, Rooms, UnreadMessages } = require('../models');
const Common = require('./Common');

class Auth extends Common {
  registration = async (req, res) => {
    const { login, password } = req.body;
    try {
      const candidate = await Users.findOne({ login });
      if (candidate) {
        return this.setResponse(res, 409, messages.userAlreadyReg);
      }
      const hashedPassword = await bcrypt.hash(password, +process.env.SALT);
      const user = new Users({ login, password: hashedPassword });
      await user.save();
      await Rooms.updateOne({ _id: process.env.GLOBAL_CHAT }, { $push: { users: user._id } });
      const unread = await new UnreadMessages({ user: user._id.toString(), room: process.env.GLOBAL_CHAT, count: 0 });
      await unread.save();
      this.setResponse(res, 201, messages.regSuccess);
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  login = async (req, res) => {
    const { login, password } = req.body;
    const user = await Users.findOne({ login });
    if (!user) {
      return this.setResponse(res, 400, messages.userNotFound);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return this.setResponse(res, 401, messages.incorrectPassword);
    }

    const secret = process.env.TOKEN_SECRET;
    const token = jwt.sign(
      { userId: user.id },
      secret,
      { expiresIn: '10h' },
    );
    res.json({ token, userId: user.id });
  }

  getAllUsers = async (req, res) => {
    try {
      const userID = req.user.userId;
      const users = await Users.find({}, { password: false, __v: false, rooms: false });
      const withoutUser = users.filter((el) => el._id.toString() !== userID.toString());
      this.setResponse(res, 200, withoutUser);
    } catch (err) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  updateUser = async (req, res) => {
    try {
      const userID = req.user.userId;
      const body = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const key in req.body) {
        if (!req.body[key]) continue;
        body[key] = req.body[key];
      }
      await Users.updateOne({ _id: userID }, { $set: { ...body } });
      const changedUser = await Users.find(
        { _id: userID },
        { password: false, __v: false, rooms: false, online: false, login: false },
      );
      this.setResponse(res, 200, ...changedUser);
    } catch (err) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  getOneUser = async (req, res) => {
    try {
      const userLogin = req.query.login;
      const user = await Users.find({ login: userLogin });
      const userToSend = user[0];
      this.setResponse(res, 200, userToSend);
    } catch (err) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }
}
module.exports = Auth;
