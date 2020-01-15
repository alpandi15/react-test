import {
  apiChangePassword
} from 'services/auth/changePasswordService'
import {
  logout
} from 'components/Security/auth'
import {
  FETCH_CHANGE_PASSWORD,
  RECEIVE_ITEM_CHANGE_PASSWORD,
  FAILED_CHANGE_PASSWORD
} from '../types'

const fetch = () => {
  return {
    type: FETCH_CHANGE_PASSWORD
  }
}

const receiveItem = (currentItem, meta) => {
  return {
    type: RECEIVE_ITEM_CHANGE_PASSWORD,
    payload: {
      currentItem,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_CHANGE_PASSWORD,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const insert = value => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiChangePassword(value)
    if (response && response.success) {
      dispatch(receiveItem(response.data, response.meta))
      logout()
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
