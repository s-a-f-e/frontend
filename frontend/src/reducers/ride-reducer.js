import {
    RIDE_ERROR, 
    HOW_LONG, //haven't done anything with this
    REQUEST_RIDE,
    REQUESTING_RIDE,
    ADD_LOCATION,
    ADDING_LOCATION,
    CHANGE_LOCATION,
    CHANGING_LOCATION,
    FETCH_NEARBY, 
    FETCHING_NEARBY, 
    FETCH_ALL, 
    FETCHING_ALL,
    ADD_PREVIOUS_MC,
    ADDING_PREVIOUS_MC,
    ADD_PREVIOUS_DRIVER, 
    ADDING_PREVIOUS_DRIVER
} from '../actions/ride-actions';

const initialState = {  //I think I need more here, haven't put too much thought into it yet
    drivers: [],
    nearby: [],
    requestingRide: false, 
    addingLocation: false, 
    changingLocation: false,
    fetchingNearby: false, 
    fetchingAll: false, 
    addingPreviousMC: false, 
    addingPreviousDriver: false,
    error: null
}

export const rideReducer = (state = initialState, action) => {
    switch(action.type) {
        case RIDE_ERROR: 
            return {
                ...state, 
                requestingRide: false, 
                addingLocation: false, 
                changingLocation: false, 
                fetchingNearby: false, 
                fetchingAll: false, 
                addingPreviousMC: false, 
                addingPreviousDriver: false, 
                error: action.payload
            }
        case REQUEST_RIDE: 
            return {
                ...state, 
                request: action.payload, 
                requestingRide: false
            }
        case REQUESTING_RIDE: 
            return {
                ...state, 
                requestingRide: true
            }
        case ADD_LOCATION:  
            return {
                ...state, 
                location: action.payload, 
                addingLocation: false
            }
        case ADDING_LOCATION: 
            return {
                ...state, 
                addingLocation: true
            }
        case CHANGE_LOCATION: 
            return {
                ...state, 
                location: action.payload, 
                changingLocation: false
            }
        case CHANGING_LOCATION: 
            return {
                ...state, 
                changingLocation: true
            }
        case FETCH_NEARBY: 
            return {
                ...state, 
                nearby: action.payload, 
                fetchingNearby: false
            }
        case FETCHING_NEARBY: 
            return {
                ...state, 
                fetchingNearby: true
            }
        case FETCH_ALL: 
            return {
                ...state, 
                drivers: action.payload, 
                fetchingAll: false
            }
        case FETCHING_ALL: 
            return {
                ...state, 
                fetchingAll: true
            }
        case ADD_PREVIOUS_MC: 
            return {
                ...state, 
                previous: action.payload, 
                addingPreviousMC: false
            }
        case ADDING_PREVIOUS_MC: 
            return {
                ...state, 
                addingPreviousMC: true
            }
        case ADD_PREVIOUS_DRIVER: 
            return {
                ...state, 
                previous: action.payload, 
                addingPreviousDriver: false
            }
        case ADDING_PREVIOUS_DRIVER: 
            return {
                ...state, 
                addingPreviousDriver: true
            }
        default: 
            return state
    }
}