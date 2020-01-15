import { getAuthMe } from 'services/auth/authService'
import {
  FETCH_AUTH,
  RECEIVE_ITEM_AUTH,
  FAILED_AUTH
} from '../types'

const fetch = () => {
  return {
    type: FETCH_AUTH
  }
}

const receive = (currentItem) => {
  return {
    type: RECEIVE_ITEM_AUTH,
    payload: {
      currentItem
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_AUTH,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const authMe = () => async (dispatch) => {
  try {
    console.log('test auth me')
    const response = await getAuthMe()
    dispatch(fetch())
    if (response.success) {
      console.log('response auth me', response)
      dispatch(receive({ ...response }))
    } else {
      console.log('fail auth me', response)
      dispatch(failed(response))
    }
  } catch (error) {
    console.log('err auth me', error)
    dispatch(failed(error))
  }
}

export {
  authMe,
  receive
}
