import {
  getMyData
} from 'services/auth/authService'
import { getUserToken } from 'utils/storage'
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

const receiveItem = (currentItem) => {
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
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const userData = () => async (dispatch) => {
  dispatch(fetch())
  try {
    const token = await getUserToken()
    if (!token) {
      return
    }
    const response = await getMyData()
    if (response && response.success) {
      dispatch(receiveItem(response.data))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  userData
}
