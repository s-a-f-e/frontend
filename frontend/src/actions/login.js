    
import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const DRIVER_LOGIN_START = 'DRIVER_LOGIN_START';
export const DRIVER_LOGIN_SUCCESS = 'DRIVER_LOGIN_SUCCESS';
export const DRIVER_LOGIN_FAILED = 'DRIVER_LOGIN_FAILED';

export const login = (creds, url) => dispatch => {
  creds.phoneNumber = Number(creds.phoneNumber);

  if(url == 'users') {
    dispatch({ type: USER_LOGIN_START });
    return axios
      .post('https://ride4life.herokuapp.com/login/' + url, creds)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        dispatch({ 
          type: USER_LOGIN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err) {
          localStorage.removeItem('token')
        } else {
          dispatch({
            type: USER_LOGIN_FAILED,
            payload: 'FAILED'
          })
        }
      })
  } else {
    dispatch({ type: DRIVER_LOGIN_START });
    return axios
      .post('https://ride4life.herokuapp.com/login/' + url, creds)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        dispatch({ 
          type: DRIVER_LOGIN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        if(err) {
          localStorage.removeItem('token')
        } else {
          dispatch({
            type: DRIVER_LOGIN_FAILED,
            payload: 'FAILED'
          })
        }
      })
  }
}