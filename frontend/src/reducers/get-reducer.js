import { GET_START, GET_SUCCESS, GET_FAILED } from '../actions';

const initialState = {
  user: {},
  fetchingUser: false,
  error: null
}

export const getReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingUser: true
      }
    case GET_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        user: action.payload[0],
        fetchingUser: false
      }
    case GET_FAILED:
    console.log(action.payload)
      return {
        ...state,
        fetchingUser: false,
        error: 'not found'
      }
    default: return state
  }
}