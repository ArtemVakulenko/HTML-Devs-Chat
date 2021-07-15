import * as AT from './actionTypes';

export const setSearchValue = (value) => ({ type: AT.SET_SEARCH_VALUE, value });
export const setRooms = (rooms) => ({ type: AT.SET_ROOMS, rooms });

export const getRooms = () => ({ type: AT.GET_ROOMS });

export const getMessages = (payload) => ({ type: AT.GET_MESSAGES, payload });
export const setMessages = (payload) => ({ type: AT.SET_MESSAGES, payload });
export const sendMessage = (payload) => ({ type: AT.SEND_MESSAGE, payload });
export const setMessageValue = (payload) => ({ type: AT.SET_MESSAGE_VALUE, payload });
export const clearMessageValue = () => ({ type: AT.CLEAR_MESSAGE_VALUE });
export const setNewMessage = (message) => ({ type: AT.SET_NEW_MESSAGE, message });
export const clearUnreadMessages = (room) => ({ type: AT.CLEAR_UNREAD_MESSAGES, room });

export const setUserData = (user) => ({ type: AT.SET_USER_DATA, user });
export const getMainPageData = () => ({ type: AT.GET_MAIN_PAGE_DATA });
export const setNewRoom = (room) => ({ type: AT.SET_NEW_ROOM, room });
export const setActiveRoom = (id) => ({ type: AT.SET_ACTIVE_ROOM, id });
export const clearActiveRoom = () => ({ type: AT.CLEAR_ACTIVE_ROOM });

export const clearUser = () => ({ type: AT.CLEAR_USER });
