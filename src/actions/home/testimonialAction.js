import {
  findAll
} from 'services/home/testimonialService'
import { call } from 'utils/yield'
import {
  FETCH_TESTIMONIAL,
  RECEIVE_TESTIMONIAL,
  FAILED_TESTIMONIAL
} from '../types'

const fetch = () => {
  return {
    type: FETCH_TESTIMONIAL
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_TESTIMONIAL,
    payload: {
      list: response.data
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_TESTIMONIAL,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const get = () => async (dispatch) => {
  call({
    dispatch,
    fetch,
    api: () => findAll({ type: 'all', active: 1, order: 'id' }),
    receive,
    failed
  })
}

export {
  get
}
