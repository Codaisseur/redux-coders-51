import axios from 'axios';

// Action creator
const savePosts = (allPosts) => ({ type: 'STORE_POSTS', payload: allPosts })

const startLoading = () => ({ type: 'START_LOADING' })
const stopLoading = () => ({ type: 'STOP_LOADING' })

const newPost = (post) => ({ type: "NEW_POST", payload: post });



// Parametrized thunk, thunk creator
export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const state = getState();
    console.log("what is getState", state);

    const offset = state.posts.all.length;

    
    console.log("running the thunk!")
    const response = await axios.get('https://codaisseur-coders-network.herokuapp.com/posts');
    const allPosts = response.data.rows;
    dispatch(savePosts(allPosts));
    console.log("Data sent to redux!");

    dispatch(stopLoading())
  } catch(e) {
    console.log(e.message);
  }
}

export const createPost = (title, content) => async (dispatch, getState) => {
  try {
    const allState = getState();

    const token = allState.user.token;

    const response = await axios.post(
      'https://codaisseur-coders-network.herokuapp.com/posts',
      { title, content }, 
      { headers: { Authorization: `Bearer ${token}` } },
    )

    console.log(response);
    // WE USE THE POST WE GET IN THE RESPONSE TO UPDATE REDUX
    dispatch(newPost(response.data));

  } catch(e) {
    console.log(e.message);
  }
}



// Selector syntaxes
// export const getAllPosts = (reduxState) => reduxState.posts.all
// export const postById = (id) => (reduxState) => reduxState.posts.all.find(p => p.id === id);

// useSelector(getAllPosts)
// useSelector(postById(1))




