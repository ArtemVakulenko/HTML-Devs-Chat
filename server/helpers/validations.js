const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { regExp, messages } = require('./constants');

dotenv.config();

exports.authValidation = (req, res, next) => {
  const { loginReg, passReg } = regExp;
  const { login, password } = req.body;
  if (!loginReg.test(login.trim())) {
    return res.status(400).json({
      message: messages.invalidLogin,
    });
  }
  if (!passReg.test(password.trim())) {
    return res.status(400).json({
      message: messages.invalidPassword,
    });
  }
  next();
};

exports.tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401).json(messages.unAuthorizated);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401).json(messages.unAuthorizated);
    req.user = user;
    next();
  });
};
