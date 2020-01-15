import {
  findAll
} from 'services/home/homeIntroService'
import { call } from 'utils/yield'
import {
  FETCH_HOME_INTRO,
  RECEIVE_HOME_INTRO,
  FAILED_HOME_INTRO
} from '../types'

const fetch = () => {
  return {
    type: FETCH_HOME_INTRO
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_HOME_INTRO,
    payload: {
      list: response.data
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_HOME_INTRO,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const get = () => async (dispatch) => {
  let data
  await call({
    dispatch,
    fetch,
    api: () => findAll({ type: 'all', active: 1, order: 'position' }),
    receive: (response) => {
      receive(response)
      data = response && response.data ? response.data : []
    },
    failed
  })
  return data
}

export {
  get
}
