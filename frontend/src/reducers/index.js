
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { getReducer } from './get-reducer';
import { addReducer } from './add-reducer';
import { driversReducer } from './drivers-reducer';
import { reviewsReducer } from './reviews-reducer';
import { updateReducer } from './update-reducer';
import { addReviewReducer } from './add-review';
import { generalReducer } from './general-reducer';
import { mcReducer } from './mc-reducer';
import { reviewReducer } from './review-reducer';
import { rideReducer } from './ride-reducer';

export default combineReducers({
    loginReducer,
    getReducer,
    addReducer,
    driversReducer,
    reviewsReducer,
    updateReducer,
    addReviewReducer
    // generalReducer, 
    // mcReducer, 
    // reviewReducer, 
    // rideReducer
})