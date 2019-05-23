    
//insert review actions here: add review, update review, delete review, fetch reviews

import axios from 'axios';

export const REVIEW_ERROR = 'REVIEW_ERROR';
export const ADD_REVIEW = 'ADD_REVIEW';
export const ADDING_REVIEW = 'ADDING_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const UPDATING_REVIEW = 'UPDATING_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const DELETING_REVIEW = 'DELETING_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const FETCHING_REVIEWS = 'FETCHING_REVIEWS';

export const fetchReviews = () => {
    const reviews = axios.get('https://ride4life.herokuapp.com/driver/${driver.id}/reviews', reviews) //need /reviews from back end
    return dispatch => {
        dispatch({ type: FETCHING_REVIEWS });
        reviews
            .then(({ data }) => {
                console.log(data)
                // dispatch({
                //     type: FETCH_REVIEWS,
                //     payload: data
                // })
            })
            .catch(error => {
                console.log(error)
                // dispatch({
                //     type: REVIEW_ERROR, 
                //     payload: error
                // })
            })
    }
}

export const addReview = review => {
    const newReview = axios.post('https://ride4life.herokuapp.com/driver/${driver.id}/reviews', newReview)
    return dispatch => {
        dispatch({ type: ADDING_REVIEW });
        newReview
            .then(({ data }) => {
                console.log(data)
                // dispatch({
                //     type: ADD_REVIEW, 
                //     payload: data
                // })
            })
            .catch(error => {
                console.log(error)
                // dispatch({
                //     type: REVIEW_ERROR, 
                //     payload: error
                // })
            })
    }
}

export const updateReview = review => {
    const updatedReview = axios.put('https://ride4life.herokuapp.com/driver/${driver.id}/reviews', updatedReview)
    return dispatch => {
        dispatch({ type: UPDATING_REVIEW });
        updatedReview 
            .then(({ data }) => {
                // dispatch({
                //     type: UPDATE_REVIEW,
                //     payload: data
                // })
            })
            .catch(error => {
                console.log(error)
                // dispatch({
                //     type: REVIEW_ERROR, 
                //     payload: error
                // })
            })
    }
}

export const deleteReview = review => {
    const deletedReview = axios.delete('https://ride4life.herokuapp.com/driver/${driver.id}/reviews', deletedReview)
    return dispatch => {
        dispatch({ type: DELETING_REVIEW });
        deletedReview
            .then(({ data }) => {
                console.log(data)
                // dispatch({
                //     type: DELETE_DRIVER,
                //     payload: data
                // })
            })
            .catch(error => {
                console.log(error)
                // dispatch({
                //     type: REVIEW_ERROR, 
                //     payload: error
                // })
            })
    }
}