//insert ride actions here: 
//how long to wait, request ride, add location, 
//change location, fetch drivers(nearby), 
//fetch drivers(all), add to previous rides(mc), 
//add to previous rides(driver)

import axios from 'axios';

export const RIDE_ERROR = 'RIDE_ERROR';
export const HOW_LONG = 'HOW_LONG';
export const REQUEST_RIDE = 'REQUEST_RIDE';
export const REQUESTING_RIDE = 'REQUESTING_RIDE';
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADDING_LOCATION = 'ADDING_LOCATION';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGING_LOCATION = 'CHANGING_LOCATION';
export const FETCH_NEARBY = 'FETCH_NEARBY';
export const FETCH_ALL = 'FETCH_ALL';
export const FETCHING_NEARBY = 'FETCHING_NEARBY';
export const FETCHING_ALL = 'FETCHING_ALL';
export const ADD_PREVIOUS_MC = 'ADD_PREVIOUS_MC';
export const ADD_PREVIOUS_DRIVER = 'ADD_PREVIOUS_DRIVER';
export const ADDING_PREVIOUS_MC = 'ADDING_PREVIOUS_MC';
export const ADDING_PREVIOUS_DRIVER = 'ADDING_PREVIOUS_DRIVER';

export const how_long = () => {

}

export const requestRide = () => {

}

export const requestingRide = () => {

}

export const addLocation = location => {
    const newLocation = axios.post('https://ride4life.herokuapp.com/user/${user.id}/location', newLocation)
    return dispatch => {
        dispatch({ type: ADDING_LOCATION })
        newLocation
            .then(({ data }) => {
                dispatch({
                    type: ADD_LOCATION,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: RIDE_ERROR, 
                    payload: error
                })
            })
    }
}

export const changeLocation = location => {
    const changedLocation = axios.put('https://ride4life.herokuapp.com/user/${user.id}/location', changedLocation)
    return dispatch => {
        dispatch({ type: CHANGING_LOCATION });
        changedLocation
            .then(({ data }) => {
                dispatch({
                    type: CHANGE_LOCATION, 
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: RIDE_ERROR, 
                    payload: error
                })
            })
    }
}

export const fetchNearby = () => {
    
}

export const fetchAll = () => {
    const drivers = axios.get('https://ride4life.herokuapp.com/driver');
    return dispatch => {
        dispatch({ type: FETCHING_ALL });
        drivers
            .then(({ data }) => {
                dispatch({
                    type: FETCH_ALL, 
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: RIDE_ERROR, 
                    payload: error
                })
            })
    }
}

export const addPreviousMC = () => {
    const newPrevious = axios.post('https://ride4life.herokuapp.com/user/${user.id}/previous', newPrevious)
    return dispatch => {
        dispatch({ type: ADDING_PREVIOUS_MC })
        newPrevious
            .then(({ data }) => {
                dispatch({
                    type: ADD_PREVIOUS_MC, 
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: RIDE_ERROR, 
                    payload: error
                })
            })
    }
}

export const addPreviousDriver = () => {
    const newPrevious = axios.post('https://ride4life.herokuapp.com/driver/${driver.id}/previous', newPrevious)
    return dispatch => {
        dispatch({ type: ADDING_PREVIOUS_DRIVER });
        newPrevious
            .then(({ data }) => {
                dispatch({
                    type: ADD_PREVIOUS_DRIVER,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: RIDE_ERROR, 
                    payload: error
                })
            })
    }
}