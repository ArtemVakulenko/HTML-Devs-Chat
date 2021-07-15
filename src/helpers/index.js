import { postRequest, getRequest } from './requests';
import { regValidate, loginValidate } from './validation';
import { setTokenInCookie, getCookie, deleteCookie } from './cookieMaster';
import { getTimeString } from './TimeMaster';
import * as EVT from './socketEvt';
import { toBase64 } from './toBase64';

export {
  postRequest, regValidate, loginValidate, setTokenInCookie,
  getCookie, getRequest, EVT, deleteCookie, toBase64, getTimeString,
};
