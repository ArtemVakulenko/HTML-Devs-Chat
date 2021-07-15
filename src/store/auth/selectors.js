import { createSelector } from 'reselect';

export const auth = (state) => state.auth;
export const getAuthData = createSelector(
  auth,
  (_state, id) => id,
  (_state, _id, page) => page,
  (auth, id, page) => auth[page][id],
);
export const getAuth = createSelector(
  auth,
  (auth) => auth.auth,
);
export const getLogin = createSelector(
  auth,
  (auth) => auth.login,
);
export const getErrorMessage = createSelector(
  auth,
  (state) => state.errorMessage,
);
