import * as AT from './actionTypes';

export const initialState = {
  createRoom: {
    roomName: '',
    searchUser: '',
    chatImg: {
      name: '',
      code: '',
    },
    users: [],
    chooseUsers: [],
  },
  changeInfo: {
    name: '',
    lastName: '',
    age: '',
    city: '',
    hobbie: '',
    img: {
      name: '',
      code: '',
    },
  },
  userToShow: {
    name: '',
    lastName: '',
    age: '',
    city: '',
    hobbie: '',
    img: '',
  },
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_ROOM_NAME:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          roomName: action.value.trim(),
        },
      };
    case AT.SET_ALL_USERS:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          users: action.users,
        },
      };
    case AT.SET_CHOOSEN_USER:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          chooseUsers: action.isDelete
            ? state.createRoom.chooseUsers.filter((el) => el !== action.id)
            : [...state.createRoom.chooseUsers, action.id],
        },
      };
    case AT.SET_SEARCH_USER:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          searchUser: action.value.trim(),
        },
      };
    case AT.SET_IMG:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          chatImg: {
            name: action.name,
            code: action.code,
          },
        },
      };
    case AT.RESET_DATA:
      return {
        ...state,
        createRoom: {
          ...state.createRoom,
          roomName: '',
          searchUser: '',
          chatImg: {
            name: '',
            code: '',
          },
          users: [],
          chooseUsers: [],
        },
      };
    case AT.SET_USER_INFO_VALUE:
      return {
        ...state,
        changeInfo: {
          ...state.changeInfo,
          [action.field]: action.value,
        },
      };
    case AT.SET_USER_IMG:
      return {
        ...state,
        changeInfo: {
          ...state.changeInfo,
          img: {
            name: action.name,
            code: action.code,
          },
        },
      };
    case AT.SET_ONE_USER:
      return {
        ...state,
        userToShow: action.user,
      };
    default:
      return state;
  }
};
