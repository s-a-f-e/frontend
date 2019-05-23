import withAuth from '../components/Login/withAuth';

export const GET_REVIEWS_START = 'GET_REVIEWS_START';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAILED = 'GET_REVIEWS_FAILED';

export const getReviews = () => dispatch => {
  dispatch({ type: GET_REVIEWS_START })
  withAuth()
    .get(`https://ride4life.herokuapp.com/reviews`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_REVIEWS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_REVIEWS_FAILED,
        payload: err.response
      })
    })
}