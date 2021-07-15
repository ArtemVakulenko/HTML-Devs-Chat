exports.regExp = {
  loginReg: /^[a-zA-Z0-9]{3,18}$/,
  passReg: /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{5,20}$/,
};

exports.url = {
  api: '/api',
  reg: '/registration',
  log: '/login',
  room: '/room',
  users: '/users',
  user: '/user',
  messages: '/messages',
};

exports.messages = {
  userAlreadyReg: 'Такой пользователь уже существует',
  regSuccess: 'Вы успешно заргестрировались',
  abstractErr: 'Что то пошло не так',
  invalidLogin: 'Логин должен содержать 3-18 латинских символов и/или цифр',
  invalidPassword: 'Пароль должен содержать 5-20 латинских символов, цифр и/или спецсимволов',
  userNotFound: 'Пользователя с таким логином не существует',
  incorrectPassword: 'Неправильный пароль',
  unAuthorizated: 'unAuthorizated',
  success: 'success',
  invalidData: 'invalidData',
};

exports.EVT = {
  CREATE_ROOM: 'CREATE_ROOM',
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_UNREAD_MESSAGE: 'NEW_UNREAD_MESSAGE',
};
