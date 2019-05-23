import withAuth from '../components/Login/withAuth';

export const GET_DRIVERS_START = 'GET_DRIVERS_START';
export const GET_DRIVERS_SUCCESS = 'GET_DRIVERS_SUCCESS';
export const GET_DRIVERS_FAILED = 'GET_DRIVERS_FAILED';

export const getDrivers = () => dispatch => {
  dispatch({ type: GET_DRIVERS_START })
  withAuth()
    .get(`https://ride4life.herokuapp.com/driver/`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_DRIVERS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_DRIVERS_FAILED,
        payload: err.response
      })
    })
}