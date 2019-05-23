import withAuth from '../components/Login/withAuth';

export const ADD_REVIEW_START = 'ADD_REVIEW_START';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILED = 'ADD_REVIEW_FAILED';

export const addReview = review => dispatch => { 
  dispatch({ type: ADD_REVIEW_START });
  return withAuth()
    .post("https://ride4life.herokuapp.com/reviews", review)
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_REVIEW_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}