import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { mainReducer } from './mainPage/reducer';
import { modalReducer } from './modals/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mainPage: mainReducer,
  modal: modalReducer,
});

export default rootReducer;
