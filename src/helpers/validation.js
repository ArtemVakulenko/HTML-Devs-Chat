import { MESSAGES_KEYS, LOGIN, PASSWORD } from '../constants';

export const regValidate = ({ login, password, confirm }) => {
  if (!LOGIN.test(login)) {
    return MESSAGES_KEYS.invalidLogin;
  }
  if (!PASSWORD.test(password)) {
    return MESSAGES_KEYS.invalidPassword;
  }
  if (password !== confirm) {
    return MESSAGES_KEYS.invalidConfirm;
  }
  return false;
};

export const loginValidate = ({ login, password }) => {
  if (!LOGIN.test(login)) {
    return MESSAGES_KEYS.invalidLogin;
  }
  if (!PASSWORD.test(password)) {
    return MESSAGES_KEYS.invalidPassword;
  }
  return false;
};
