import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    DRIVER_LOGIN_START,
    DRIVER_LOGIN_SUCCESS,
    DRIVER_LOGIN_FAILED
  } from '../actions';
  
  const initialState = {
    loggingIn: false,
    id: null,
    error: null
  }
  
  export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
      case USER_LOGIN_START:
        return {
          ...state,
          loggingIn: true
        }
      case USER_LOGIN_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          id: action.payload.userID,
          loggingIn: false
        }
      case USER_LOGIN_FAILED:
        console.log(action.payload)
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        }
      case DRIVER_LOGIN_START:
        return {
          ...state,
          loggingIn: true
        }
      case DRIVER_LOGIN_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          id: action.payload.driverID,
          loggingIn: false
        }
      case DRIVER_LOGIN_FAILED:
        console.log(action.payload)
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        }
      default: return state;
    }
  }