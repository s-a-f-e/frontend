import {
    REVIEW_ERROR, 
    ADD_REVIEW, 
    ADDING_REVIEW, 
    UPDATE_REVIEW, 
    UPDATING_REVIEW, 
    DELETE_REVIEW, 
    DELETING_REVIEW, 
    FETCH_REVIEWS, 
    FETCHING_REVIEWS
} from '../actions/review-actions'

const initialState = {
    review: {}, //?
    reviews: [],
    fetchingReviews: false, 
    addingReview: false, 
    updatingReview: false, 
    deletingReview: false, 
    error: null
}

export const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case REVIEW_ERROR: 
            return {
                ...state, 
                fetchingReviews: false, 
                addingReview: false, 
                updatingReview: false, 
                deletingReview: false, 
                error: action.payload
            }
        case FETCH_REVIEWS: 
            return {
                ...state, 
                reviews: action.payload, 
                fetchingReviews: false
            }
        case FETCHING_REVIEWS: 
            return {
                ...state, 
                fetchingReviews: true
            }
        case ADD_REVIEW: 
            return {
                ...state, 
                review: action.payload, 
                addingReview: false
            }
        case ADDING_REVIEW: 
            return {
                ...state, 
                addingReview: true
            }
        case UPDATE_REVIEW: 
            return {
                ...state, 
                review: action.payload, 
                updatingReview: false
            }
        case UPDATING_REVIEW: 
            return {
                ...state, 
                updatingReview: true
            }
        case DELETE_REVIEW: 
            return {
                ...state, 
                review: action.payload,
                deletingReview: false
            }
        case DELETING_REVIEW: 
            return {
                ...state, 
                deletingReview: true
            }
        default: 
            return state
    }
}