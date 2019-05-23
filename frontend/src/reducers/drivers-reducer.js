import { GET_DRIVERS_START, GET_DRIVERS_SUCCESS, GET_DRIVERS_FAILED } from '../actions';

const initialState = {
  drivers: [],
  fetchingDrivers: false,
  error: null
}

export const driversReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DRIVERS_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingDrivers: true
      }
    case GET_DRIVERS_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        drivers: action.payload,
        fetchingUser: false
      }
    case GET_DRIVERS_FAILED:
    console.log(action.payload)
      return {
        ...state,
        fetchingDrivers: false,
        error: 'none found'
      }
    default: return state
  }
}