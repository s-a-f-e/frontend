    
import { GET_REVIEWS_START, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILED } from '../actions';

const initialState = {
  reviews: [],
  fetchingReviews: false,
  error: null
}

export const reviewsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_REVIEWS_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingReviews: true
      }
    case GET_REVIEWS_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        reviews: action.payload,
        fetchingReviews: false
      }
    case GET_REVIEWS_FAILED:
    console.log(action.payload)
      return {
        ...state,
        fetchingReviews: false,
        error: 'not found'
      }
    default: return state
  }
}