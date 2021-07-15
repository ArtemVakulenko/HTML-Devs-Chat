import { createSelector } from 'reselect';

export const createRoom = (state) => state.modal.createRoom;
export const userInfo = (state) => state.modal.changeInfo;
export const modal = (state) => state.modal;

export const roomNameValue = createSelector(
  createRoom,
  (state) => state.roomName,
);
export const users = createSelector(
  createRoom,
  (state) => {
    const filteruser = state.users
      .filter((el) => el.login.toLowerCase().includes(state.searchUser.toLowerCase()));
    return filteruser;
  },
);

export const searchValue = createSelector(
  createRoom,
  (state) => state.searchUser,
);

export const imgValue = createSelector(
  createRoom,
  (_state, field) => field,
  (state, field) => state.chatImg[field],
);

export const createData = createSelector(
  createRoom,
  (state) => ({
    img: state.chatImg.code,
    name: state.roomName,
    users: state.chooseUsers,
  }),
);
export const chooseUsers = createSelector(
  createRoom,
  (modal) => modal.chooseUsers,
);

export const userInfoValue = createSelector(
  userInfo,
  (_state, field) => field,
  (state, field) => state[field],
);

export const userImgValue = createSelector(
  userInfo,
  (_state, field) => field,
  (state, field) => state.img[field],
);

export const allUserInfo = createSelector(
  userInfo,
  (changeInfo) => ({
    name: changeInfo.name,
    lastName: changeInfo.lastName,
    age: changeInfo.age,
    city: changeInfo.city,
    hobbie: changeInfo.hobbie,
    img: changeInfo.img.code,
  }),
);

export const getUserToShow = createSelector(
  modal,
  (modal) => modal.userToShow,
);
