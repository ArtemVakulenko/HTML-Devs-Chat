import * as AT from './actionTypes';

export const setImg = (name, code) => ({ type: AT.SET_IMG, name, code });
export const setRoomName = (value) => ({ type: AT.SET_ROOM_NAME, value });
export const setAllUsers = (users) => ({ type: AT.SET_ALL_USERS, users });
export const setSearchUser = (value) => ({ type: AT.SET_SEARCH_USER, value });
export const setChoosenUser = (id, isDelete) => ({ type: AT.SET_CHOOSEN_USER, id, isDelete });
export const resetData = () => ({ type: AT.RESET_DATA });

export const createChat = () => ({ type: AT.CREATE_CHAT });
export const getAllUsers = () => ({ type: AT.GET_ALL_USERS });

export const setUserImg = (name, code) => ({ type: AT.SET_USER_IMG, name, code });
export const setUserInfoValue = (field, value) => ({ type: AT.SET_USER_INFO_VALUE, field, value });
export const sendUserInfo = () => ({ type: AT.SEND_USER_INFO });

export const getOneUser = (login) => ({ type: AT.GET_ONE_USER, login });
export const setOneUser = (user) => ({ type: AT.SET_ONE_USER, user });
