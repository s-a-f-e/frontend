import withAuth from '../components/Login/withAuth';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILED = 'UPDATE_FAILED';

export const update = (url, profile) => dispatch => { 
  
  dispatch({ type: UPDATE_START });
  return withAuth()
    .put("https://ride4life.herokuapp.com/" + url, profile)
    .then(res => {
      console.log(res)
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}