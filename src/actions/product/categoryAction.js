import Router from 'next/router'
import {
  findOne,
  findAll
} from 'services/product/categoryService'
import { call } from 'utils/yield'
import {
  FETCH_CATEGORY,
  RECEIVE_ITEM_CATEGORY,
  RECEIVE_CATEGORY,
  FAILED_CATEGORY,
  UPDATE_STATE_CATEGORY
} from '../types'

const fetch = () => {
  return {
    type: FETCH_CATEGORY
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_CATEGORY,
    payload: {
      list: response && response.data && response.data.length > 0 ? response.data : [],
      meta: response && response.meta ? response.meta : []
    }
  }
}

const receiveItem = (response) => {
  return {
    type: RECEIVE_ITEM_CATEGORY,
    payload: {
      currentItem: response && response.data ? response.data : {}
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_CATEGORY,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const updateState = (payload) => {
  return {
    type: UPDATE_STATE_CATEGORY,
    payload
  }
}

const getById = (id, data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await findOne(id, data)
    if (response.success) {
      dispatch(receiveItem(response))
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

const get = (params = {}) => async (dispatch, getState) => {
  const { filter } = getState().categoryStore
  await call({
    dispatch,
    fetch,
    api: () => findAll({
      active: 1,
      ...filter,
      ...params
    }),
    receive,
    failed
  })
}

const changeFilter = params => async (dispatch, getState) => {
  const { filter } = getState().categoryStore
  const newFilter = {
    ...filter,
    ...params
  }
  const { active, type, ...other } = newFilter

  Router.push('/product/list', '/product/list', {
    query: other
  })
  dispatch(updateState({
    filter: newFilter
  }))
  dispatch(get(newFilter))
}

export {
  getById,
  get,
  changeFilter
}
