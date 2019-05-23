import {
    ADD_START, 
    ADD_SUCCESS, 
    ADD_FAILED
  } from '../actions';
  
  
  const initialState = {
    adding: false,
    id: null,
    error: null
  }
  
  export const addReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_START:
      console.log('add_start')
        return {
          ...state,
        }
      case ADD_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          id: action.payload
        }
      case ADD_FAILED:
      console.log('add_failed')
        return {
          ...state,
        }
      default: return state;
    }
  }