import Router from 'next/router'
import { registerApi } from 'services/auth/registerService'
import {
  FETCH_REGISTER,
  RECEIVE_REGISTER,
  FAILED_REGISTER
} from '../types'

const fetch = () => {
  return {
    type: FETCH_REGISTER
  }
}

const receive = ({ data, meta }) => {
  return {
    type: RECEIVE_REGISTER,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_REGISTER,
    payload: {
      errorMessage: error.message
    }
  }
}

const register = data => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await registerApi(data)
    if (response.success) {
      dispatch(receive({ ...response }))
      Router.push({
        pathname: '/auth/login'
      })
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  register
}
