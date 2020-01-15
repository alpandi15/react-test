import {
  getSlider
} from '../../services/home/sliderService'
import {
  FETCH_SLIDER,
  RECEIVE_SLIDER,
  FAILED_SLIDER
} from '../types'
import { call } from '../../utils/yield'

const fetch = () => {
  return {
    type: FETCH_SLIDER
  }
}

const receive = (response) => {
  return {
    type: RECEIVE_SLIDER,
    payload: {
      listSlider: response.data
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_SLIDER,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const get = () => async (dispatch) => {
  call({
    dispatch,
    fetch,
    api: () => getSlider({ active: 1, order: 'id' }),
    receive,
    failed
  })
}

export {
  get
}
