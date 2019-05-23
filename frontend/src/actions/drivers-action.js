//insert driver actions here: add driver, update driver, delete driver, fetch driver profile, add image, delete image, edit bio

import axios from 'axios';

export const DRIVER_ERROR = 'DRIVER_ERROR'
export const ADD_DRIVER = 'ADD_DRIVER';
export const ADDING_DRIVER = 'ADDING_DRIVER';
export const UPDATE_DRIVER = 'UPDATE_DRIVER';
export const UPDATING_DRIVER = 'UPDATING_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const DELETING_DRIVER = 'DELETING_DRIVER';
export const FETCH_DRIVER = 'FETCH_DRIVER';
export const FETCHING_DRIVER = 'FETCHING_DRIVER';
export const UPDATE_BIO = 'UPDATE_BIO';
export const UPDATING_BIO = 'UPDATING_BIO';
export const ADD_BIO = 'ADD_BIO';
export const ADDING_BIO = 'ADDING_BIO';
export const FETCH_PREVIOUS_DRIVER = 'FETCH_PREVIOUS_DRIVER';
export const FETCHING_PREVIOUS_DRIVER = 'FETCHING_PREVIOUS_DRIVER';

// export const ADD_IMAGE = 'ADD_IMAGE';                these are for stretch goals
// export const DELETE_IMAGE = 'DELETE_IMAGE';
// export const FETCH_IMAGES = 'FETCH_IMAGES';

export const fetchDriver = () => {
    const drivers = axios.get('https://ride4life.herokuapp.com/driver/${driver.id}');
    return dispatch => {
        dispatch({ type: FETCHING_DRIVER })
        drivers
            .then(result => {
                console.log(result)
                // dispatch({
                //     type: FETCH_DRIVER,
                //     payload: result.data
                // })
            })
            .catch(error => {
                console.log(error)
                // dispatch({
                //     type: DRIVER_ERROR, 
                //     payload: error
                // })
            })
    }
}

export const addDriver = driver => {
    const newDriver = axios.post('https://ride4life.herokuapp.com/driver', newDriver);
    return dispatch => {
        dispatch({ type: ADDING_DRIVER })
        newDriver
            .then(({ data }) => {
                dispatch({
                    type: ADD_DRIVER,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR, 
                    payload: error
                })
            })
    }
}

export const updateDriver = driver => {
    const updatedDriver = axios.put('https://ride4life.herokuapp.com/driver/${driver.id}', updatedDriver)
    return dispatch => {
        dispatch({ type: UPDATING_DRIVER });
        updatedDriver
            .then(({ data }) => {
                dispatch({
                    type: UPDATE_DRIVER,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR, 
                    payload: error
                })
            })
    }
}

export const deleteDriver = driver => {
    const deletedDriver = axios.delete('https://ride4life.herokuapp.com/driver/${driver.id}', deletedDriver)
    return dispatch => {
        dispatch({ type: DELETING_DRIVER })
        deletedDriver 
            .then(({ data }) => {
                dispatch({
                    type: DELETE_DRIVER,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR, 
                    payload: error
                })
            })
    }
}

export const addBio = driver => {
    const newBio = axios.post('https://ride4life.herokuapp.com/driver/${driver.id}/bio', newBio)
    return dispatch => {
        dispatch({ type: ADDING_BIO });
        newBio
            .then(({ data }) => {
                dispatch({
                    type: ADDING_BIO,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR, 
                    payload: error
                })
            })
    }
}

export const updateBio = driver => {
    const updatedBio = axios.put('https://ride4life.herokuapp.com/driver/${driver.id}/bio', updatedBio)
    return dispatch => {
        dispatch({ type: UPDATING_BIO });
        updatedBio
            .then(({ data }) => {
                dispatch({
                    type: UPDATE_BIO,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR,
                    payload: error
                })
            })
    }
}

export const fetchPreviousDriver = () => {
    const previous = axios.get('https://ride4life.herokuapp.com/driver/${driver.id}/previous')
    return dispatch => {
        dispatch({ type: FETCHING_PREVIOUS_DRIVER });
        previous
            .then(({data }) => {
                dispatch({
                    type: FETCH_PREVIOUS_DRIVER, 
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: DRIVER_ERROR, 
                    payload: error
                })
            })
    }
}