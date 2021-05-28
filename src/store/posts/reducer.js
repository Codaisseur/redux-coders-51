// src/store/user/reducer.js
const initialState = {
  loading: false,
  all: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // 1. Everytime I get the full list of posts
    // 2. I'm gonna get the posts in groups, and I have to add to the `add` key.
    case 'STORE_POSTS': {
      const newPosts = action.payload;
      return {
        ...state,
        all: [...state.all, ...newPosts], // all: [{}, {}, {}, {} ]
      }
    }
    case "NEW_POST": {
      // state.all => posts are stored
      // payload => a new post
      const oneNewPost = action.payload; // { title, content }
      return {
        ...state,
        all: [oneNewPost, ...state.all]
      }

    }
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      }
    }
    case "STOP_LOADING": {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return state;
    }
  }
}