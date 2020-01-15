import {
  FETCH_TESTIMONIAL,
  RECEIVE_TESTIMONIAL,
  FAILED_TESTIMONIAL
} from '../../actions/types'

const initialState = {
  loading: false,
  list: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TESTIMONIAL:
      return Object.assign({}, state, {
        loading: true,
        list: []
      })
    case RECEIVE_TESTIMONIAL:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list
      })
    case FAILED_TESTIMONIAL:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    default:
      return state
  }
}
