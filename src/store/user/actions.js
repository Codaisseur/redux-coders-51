import axios from 'axios';

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token
})

const setProfile = (userData) => ({
  type: "SET_PROFILE",
  payload: { profile: userData },
})

export const logout = () => ({
  type: "LOGOUT",
})

export const signup = (name, email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post('https://codaisseur-coders-network.herokuapp.com/signup', {
      name: name,
      email: email,
      password: password
    })

    const token = response.data.jwt;
    dispatch(setToken(response.data.jwt))

    dispatch(bootstrapLogin(token));

  } catch(e) {
    console.log(e.message);
  }
}

export const login = (email, password, history) => async (dispatch, getState) => {
  try {
    const response = await axios.post('https://codaisseur-coders-network.herokuapp.com/login', {
      email: email,
      password: password
    })

    const token = response.data.jwt;
    dispatch(setToken(response.data.jwt))
    
    localStorage.setItem("token", token)

    dispatch(bootstrapLogin(token));

    history.push('/');
  } catch(e) {
    console.log(e.message);
  }
}

export const bootstrapLogin = (token) => async (dispatch, getState) => {
  try {
    const profileResponse = await axios.get(
      'https://codaisseur-coders-network.herokuapp.com/me',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(profileResponse);
    dispatch(setProfile(profileResponse.data));
  } catch(e) {
    console.log(e.message);
  }
}


