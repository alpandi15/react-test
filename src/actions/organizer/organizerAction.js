import { getOne } from 'services/organizer/organizerService'
import { getMyData } from 'services/auth/authService'
import {
  FETCH_ORGANIZER,
  SUCCESS_ORGANIZER,
  FAILED_ORGANIZER,
  RECEIVE_ORGANIZER,
  RECEIVE_ITEM_ORGANIZER
} from '../types'

const fetch = () => {
  return {
    type: FETCH_ORGANIZER
  }
}

const success = (meta) => {
  return {
    type: SUCCESS_ORGANIZER,
    payload: {
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_ORGANIZER,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_ORGANIZER,
    payload: {
      currentItem: response && response.data && response.data.length > 0 ? response.data[0] : {}
    }
  }
}

const receiveItem = (response) => {
  return {
    type: RECEIVE_ITEM_ORGANIZER,
    payload: {
      currentItem: response && response.data && response.data,
      type: FETCH_ORGANIZER
    }
  }
}

const getById = id => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await getOne(id)
    if (response.success) {
      dispatch(receive(response))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}


const getMyOrganizerData = () => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await getMyData()
    if (response.success) {
      dispatch(receiveItem(response))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  getById,
  getMyOrganizerData,
  fetch,
  success,
  failed
}
