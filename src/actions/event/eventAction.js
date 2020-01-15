import {
  apiGet,
  apiGetById
} from 'services/event/eventService'
import {
  RESET_ITEM_EVENT,
  RECEIVE_ITEM_EVENT,
  FAILED_EVENT,
  RECEIVE_EVENT,
  FETCH_EVENT
} from '../types'

const fetch = () => {
  return {
    type: FETCH_EVENT
  }
}

const resetItem = () => {
  return {
    type: RESET_ITEM_EVENT
  }
}

const receiveItem = (currentItem) => {
  return {
    type: RECEIVE_ITEM_EVENT,
    payload: {
      currentItem
    }
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_EVENT,
    payload: {
      list,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_EVENT,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const getById = (id, data) => async (dispatch) => {
  try {
    dispatch(resetItem())
    dispatch(fetch())
    const response = await apiGetById(id, data)
    if (response && response.success) {
      dispatch(receiveItem(response.data))
      return response.data
    }
    dispatch(failed(response))
  } catch (error) {
    return dispatch(failed(error))
  }
}

const get = data => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGet(data)
    if (response && response.success) {
      dispatch(receive(response.data, response.meta))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  getById,
  get
}
