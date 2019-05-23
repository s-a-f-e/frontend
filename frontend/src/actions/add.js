import axios from 'axios';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';

export const add = (profile, bool) => dispatch => { 
  // profile.phoneNumber = Number(profile.phoneNumber);
  const url = bool ? '/users' : '/driver';
  dispatch({ type: ADD_START });
  return axios
    .post("https://ride4life.herokuapp.com/register" + url, profile)
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data[0]
      })
    })
    .catch(err => {
      console.log(err)
    })
}