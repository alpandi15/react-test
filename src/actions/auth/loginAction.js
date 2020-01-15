import { loggedin } from 'components/Security/auth'
import {
  loginApi,
  loginSosmed
} from 'services/auth/loginService'
import {
  FETCH_LOGIN,
  RECEIVE_LOGIN,
  FAILED_LOGIN
} from '../types'

const fetch = () => {
  return {
    type: FETCH_LOGIN
  }
}

const receive = ({ data, meta, path }) => {
  loggedin({ ...data, path })
  return {
    type: RECEIVE_LOGIN,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_LOGIN,
    payload: {
      errorMessage: error.message
    }
  }
}

const login = (data, path) => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await loginApi(data)
    if (response.success) {
      // authMe()
      dispatch(receive({ ...response, path }))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

const loginSocial = (data, path) => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await loginSosmed(data)
    if (response.success) {
      // authMe()
      dispatch(receive({ ...response, path }))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  login,
  loginSocial
}
