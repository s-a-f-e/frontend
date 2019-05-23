import {
    UPDATE_START, 
    UPDATE_SUCCESS, 
    UPDATE_FAILED
  } from '../actions';
  
  
  const initialState = {
    updating: false,
    id: null,
    error: null
  }
  
  export const updateReducer = (state = initialState, action) => {
    switch(action.type) {
      case UPDATE_START:
      console.log('UPDATE_start')
        return {
          ...state,
        }
      case UPDATE_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          id: action.payload
        }
      case UPDATE_FAILED:
      console.log('UPDATE_failed')
        return {
          ...state,
        }
      default: return state;
    }
  }