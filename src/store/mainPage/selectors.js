import { createSelector } from 'reselect';

export const mainPage = (state) => state.mainPage;
export const searchValue = createSelector(
  mainPage,
  (mainPage) => mainPage.sidebar.search,
);
export const rooms = createSelector(
  mainPage,
  ({ sidebar }) => {
    const filterRoom = sidebar.rooms
      .filter((el) => el.name.toLowerCase().includes(sidebar.search.toLowerCase()));
    return filterRoom;
  },
);
export const userId = createSelector(
  mainPage,
  (mainPage) => mainPage.user.id,
);
export const chat = createSelector(
  mainPage,
  (mainPage) => mainPage.chat,
);
export const messages = createSelector(
  mainPage,
  (mainPage) => mainPage.chat.messages,
);
export const userName = createSelector(
  mainPage,
  (mainPage) => mainPage.user.login,
);
export const messageValue = createSelector(
  mainPage,
  (mainPage) => mainPage.chat.messageValue,
);
export const activeRoom = createSelector(
  mainPage,
  (mainPage) => mainPage.chat.activeRoom,
);

export const changeButtonData = createSelector(
  mainPage,
  (mainPage) => ({ login: mainPage.user.login, img: mainPage.user.img }),
);
export const getUserPic = createSelector(
  mainPage,
  (mainPage) => mainPage.user.img,
);
