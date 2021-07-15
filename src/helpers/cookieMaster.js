import { cookieAge } from '../constants';

export const setTokenInCookie = (payload, age = cookieAge) => {
    document.cookie = `token=${payload}; path=/; max-age=${age}`;
};
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

export const deleteCookie = (name) => {
    setTokenInCookie(name, -1);
};
