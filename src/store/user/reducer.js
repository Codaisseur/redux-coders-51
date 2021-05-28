// src/store/user/reducer.js
const initialState = {
  profile: null,
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.payload
      }
    }
    case "SET_PROFILE": {
      return {
        ...state,
        profile: action.payload.profile
      }
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      return {
        profile: null,
        token: null
      }
    }
    default: {
      return state;
    }
  }
}