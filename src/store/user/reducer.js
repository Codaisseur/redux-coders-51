// src/store/user/reducer.js
const initialState = {
  email: '',
  name: '',
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}