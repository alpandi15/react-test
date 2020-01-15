import Router from 'next/router'
import {
  findOne,
  findAll
} from 'services/product/productService'
import { change } from 'redux-form'
import { call } from 'utils/yield'
import {
  FETCH_PRODUCT,
  RECEIVE_ITEM_PRODUCT,
  RECEIVE_PRODUCT,
  UPDATE_STATE_PRODUCT,
  FAILED_PRODUCT
} from '../types'

const fetch = () => {
  return {
    type: FETCH_PRODUCT
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_PRODUCT,
    payload: {
      list: response && response.data && response.data.length > 0 ? response.data : [],
      meta: response && response.meta ? response.meta : []
    }
  }
}

const receiveItem = (response) => {
  return {
    type: RECEIVE_ITEM_PRODUCT,
    payload: {
      currentItem: response && response.data ? response.data : {}
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_PRODUCT,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const updateState = (payload) => {
  return {
    type: UPDATE_STATE_PRODUCT,
    payload
  }
}

const getById = id => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await findOne(id, {
      relationship: 1
    })
    if (response.success) {
      dispatch(receiveItem(response))
      return response.data
    }
    dispatch(failed(response))
  } catch (error) {
    dispatch(failed(error))
  }
}

const get = (params = {}) => async (dispatch, getState) => {
  const { filter } = getState().productStore
  dispatch(fetch())
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
  const { filter } = getState().productStore
  const newFilter = {
    ...filter,
    ...params
  }
  const {
    active,
    type,
    pageSize,
    ...other
  } = newFilter
  Router.push({
    pathname: '/product/list',
    query: other
  })
  if (newFilter && newFilter.q) {
    dispatch(change('SearchProduct', 'q', newFilter.q))
  }

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
