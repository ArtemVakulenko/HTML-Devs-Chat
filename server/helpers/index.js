const { connect } = require('./connect');
const { authValidation, tokenValidation } = require('./validations');
const { url, regExp, messages, EVT } = require('./constants');

module.exports = {
  url,
  EVT,
  regExp,
  connect,
  messages,
  authValidation,
  tokenValidation,
};
