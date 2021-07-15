import * as AT from './actionTypes';

export const initialState = {
  sidebar: {
    search: '',
    rooms: [],
  },
  chat: {
    messages: [],
    roomId: '',
    messageValue: '',
    activeRoom: {},
  },
  user: {
    id: '',
    login: '',
    name: '',
    lastName: '',
    img: '',
    hobbie: '',
    city: '',
    age: '',
  },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_SEARCH_VALUE:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          search: action.value,
        },
      };
      case AT.CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    case AT.SET_ROOMS:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          rooms: action.rooms,
        },
      };
    case AT.SET_MESSAGES:
      return {
        ...state,
        chat: {
          ...state.chat,
          messages: action.payload,
        },
      };
    case AT.SET_MESSAGE_VALUE:
      return {
        ...state,
        chat: {
          ...state.chat,
          messageValue: action.payload,
        },
      };
    case AT.CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        chat: {
          ...state.chat,
          messageValue: '',
        },
      };
    case AT.SET_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case AT.SET_NEW_ROOM:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          rooms: [action.room, ...state.sidebar.rooms],
        },
      };
    case AT.SET_ACTIVE_ROOM:
      return {
        ...state,
        chat: {
          ...state.chat,
          activeRoom: state.sidebar.rooms.filter((el) => el._id.toString() === action.id?.toString())[0],
        },
      };
    case AT.CLEAR_ACTIVE_ROOM:
      return {
        ...state,
        chat: {
          ...state.chat,
          activeRoom: {},
        },
      };
    case AT.CLEAR_UNREAD_MESSAGES:
      state.sidebar.rooms.forEach((el) => {
        if (el._id.toString() === action.room.toString()) {
          el.unreadCount = 0;
          el.lastMessage = '';
        }
      });
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          rooms: [...state.sidebar.rooms],
        },
      };
    case AT.SET_NEW_MESSAGE:
      if (state.chat.activeRoom._id && action.message.room.toString() === state.chat.activeRoom._id.toString()) {
        return {
          ...state,
          chat: {
            ...state.chat,
            messages: [...state.chat.messages, action.message],
          },
        };
      }
      state.sidebar.rooms.forEach((el) => {
        if (el._id.toString() === action.message.room.toString()) {
          el.unreadCount += 1;
          el.lastMessage = action.message.date;
        }
      });
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          rooms: [...state.sidebar.rooms],
        },
      };
    default: return state;
  }
};
