import Router from 'next/router'
import {
  apiCreateEvent
} from 'services/event/createEventService'
import {
  uploadImage
} from 'actions/utils/imageUploadAction'
import {
  FETCH_CREATE_EVENT,
  RECEIVE_ITEM_CREATE_EVENT,
  FAILED_CREATE_EVENT
} from '../types'

const fetch = () => {
  return {
    type: FETCH_CREATE_EVENT
  }
}

const receiveItem = (currentItem, meta) => {
  return {
    type: RECEIVE_ITEM_CREATE_EVENT,
    payload: {
      currentItem,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_CREATE_EVENT,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

const insert = (organizerId, data) => async (dispatch) => {
  try {
    dispatch(fetch())
    if (data && data.image) {
      data.image = await dispatch(uploadImage('event', data.image))
    }
    if (data && data.stageImage) {
      data.stageImage = await dispatch(uploadImage('stage', data.stageImage))
    }
    const response = await apiCreateEvent({
      ...data,
      organizerId
    })
    if (response && response.success) {
      dispatch(receiveItem(response.data, response.meta))
      Router.push({
        pathname: `/event/detail/${response.data.id}/${organizerId}`
      })
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
