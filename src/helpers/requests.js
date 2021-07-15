import { getCookie } from './cookieMaster';

export const postRequest = (url, body, method = 'POST') => {
  return fetch(url, {
    body: JSON.stringify(body),
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('token'),
    },
  });
};

export const getRequest = (url) => {
  return fetch(url, {
    headers: {
      Authorization: getCookie('token'),
    },
  });
};
