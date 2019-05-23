import {
    MC_ERROR, 
    ADD_MC, 
    ADDING_MC, 
    UPDATE_MC, 
    UPDATING_MC, 
    DELETE_MC, 
    DELETING_MC, 
    FETCH_PREVIOUS_MC, 
    FETCHING_PREVIOUS_MC
} from '../actions/mc-actions'

const initialState = {
    user: {},
    addingMC: false, 
    updatingMC: false, 
    deletingMC: false, 
    fetchingPrevious: false,
    error: null
}

export const mcReducer = (state = initialState, action) => {
    switch(action.type) {
        case MC_ERROR: 
            return {
                ...state, 
                user: {},
                addingMC: false, 
                updatingMC: false, 
                deletingMC: false, 
                fetchingPrevious: false,
                error: action.payload
            }
        case ADD_MC: 
            return {
                ...state, 
                user: action.payload, 
                addingMC: false
            }
        case ADDING_MC: 
            return {
                ...state, 
                addingMC: true
            }
        case UPDATE_MC: 
            return {
                ...state, 
                user: action.payload, 
                updatingMC: false
            }
        case UPDATING_MC:
            return {
                ...state, 
                updatingMC: true
            }
        case DELETE_MC: 
            return {
                ...state, 
                user: action.payload, 
                deletingMC: false
            }
        case DELETING_MC: 
            return {
                ...state, 
                deletingMC: true
            }
        case FETCH_PREVIOUS_MC: 
            return {
                ...state, 
                previous: action.payload, 
                fetchingPrevious: false
            }
        case FETCHING_PREVIOUS_MC: 
            return {
                ...state, 
                fetchingPrevious: true
            }
        default: 
            return state
    }
}