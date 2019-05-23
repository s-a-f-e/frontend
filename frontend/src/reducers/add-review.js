import {
    ADD_REVIEW_START,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAILED
  } from '../actions';
  
  const initialState = {
    adding: false,
    review: null,
    error: null
  }
  
  export const addReviewReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_REVIEW_START:
      console.log('add_REVIEW_start')
        return {
          ...state,
        }
      case ADD_REVIEW_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          review: action.payload
        }
      case ADD_REVIEW_FAILED:
      console.log('add_REVIEW_failed')
        return {
          ...state,
        }
      default: return state;
    }
  }