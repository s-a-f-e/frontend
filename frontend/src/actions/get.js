import withAuth from '../components/Login/withAuth';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

export const get = (id, url) => dispatch => {
  console.log(url, id)
  dispatch({ type: GET_START })
  withAuth()
    .get(`https://ride4life.herokuapp.com/${url}/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_FAILED,
        payload: err.response
      })
    })
}