import Router from 'next/router'
import {
  apiForgotPassword
} from 'services/auth/forgotPasswordService'
import {
  FETCH_FORGOT_PASSWORD,
  RECEIVE_ITEM_FORGOT_PASSWORD,
  FAILED_FORGOT_PASSWORD
} from '../types'

const fetch = () => {
  return {
    type: FETCH_FORGOT_PASSWORD
  }
}

const receiveItem = (currentItem, meta) => {
  return {
    type: RECEIVE_ITEM_FORGOT_PASSWORD,
    payload: {
      currentItem,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_FORGOT_PASSWORD,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const insert = value => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiForgotPassword('email', value)
    if (response && response.success) {
      dispatch(receiveItem(response.data, response.meta))

      if (value && value.account) {
        Router.push({
          pathname: '/auth/forgot-password/verification',
          query: { email: value.account }
        })
      }

      return response.data
    }
    dispatch(failed(response))
    return {}
  } catch (error) {
    dispatch(failed(error))
    return {}
  }
}

export {
  insert
}
