import {
  findAll
} from 'services/content/articleService'
import { call } from 'utils/yield'
import {
  FETCH_ARTICLE,
  RECEIVE_ITEM_ARTICLE,
  FAILED_ARTICLE
} from '../types'

const fetch = () => {
  return {
    type: FETCH_ARTICLE
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_ITEM_ARTICLE,
    payload: {
      currentItem: response && response.data && response.data.length > 0 ? response.data[0] : {}
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_ARTICLE,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getBySlug = slug => async (dispatch) => {
  let data
  await call({
    dispatch,
    fetch,
    api: () => findAll({
      slug, active: 1, pageSize: 1
    }),
    receive: (response) => {
      receive(response)
      data = response && response.data && response.data.length > 0 ? response.data[0] : {}
    },
    failed
  })
  return data
}

export {
  getBySlug
}
