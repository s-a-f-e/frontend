//insert mother-caregiver actions here: add MC, update MC, delete MC

import axios from 'axios'

export const MC_ERROR = 'MC_ERROR';
export const ADD_MC = 'ADD_MC';
export const ADDING_MC = 'ADDING_MC';
export const UPDATE_MC = 'UPDATE_MC';
export const UPDATING_MC = 'UPDATING_MC';
export const DELETE_MC = 'DELETE_MC';
export const DELETING_MC = 'DELETING_MC';
export const FETCH_PREVIOUS_MC = 'FETCH_PREVIOUS_MC';
export const FETCHING_PREVIOUS_MC = 'FETCHING_PREVIOUS_MC';

export const addMC = () => {
    const newMC = axios.post('https://ride4life.herokuapp.com/users', newMC)
    return dispatch => {
        dispatch({ type: ADDING_MC });
        newMC
            .then(({ data }) => {
                dispatch({
                    type: ADD_MC,
                    payload: data
                })
            })
    }
}

export const updateMC = user => {
    const updatedMC = axios.put('https://ride4life.herokuapp.com/users/${user.id}', updatedMC)
    return dispatch => {
        dispatch({ type: UPDATING_MC });
        updatedMC
            .then(({ data }) => {
                dispatch({
                    type: UPDATE_MC,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: MC_ERROR, 
                    payload: error
                })
            })
    }
}

export const deleteMC = user => {
    const deletedMC = axios.delete('https://ride4life.herokuapp.com/users/${user.id}', deletedMC)
    return dispatch => {
        dispatch({ type: DELETING_MC });
        deletedMC
            .then(({ data }) => {
                dispatch({
                    type: DELETE_MC,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: MC_ERROR, 
                    payload: error
                })
            })
    }
}

export const fetchPreviousMC = () => {
    const previous = axios.get('https://ride4life.herokuapp.com/user/${user.id}/previous')
    return dispatch => {
        dispatch({ type: FETCHING_PREVIOUS_MC });
        previous
            .then(({ data }) => {
                dispatch({
                    type: FETCH_PREVIOUS_MC,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: MC_ERROR,
                    payload: error
                })
            })
    }
}