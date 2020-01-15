import {
  FETCH_RESET_PASSWORD,
  SUCCESS_RESET_PASSWORD,
  FAILED_RESET_PASSWORD
} from '../../actions/types'

const initialState = {
  loading: false,
  data: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RESET_PASSWORD:
      return Object.assign({}, state, {
        loading: true,
        data: {},
        meta: {},
        errorMessage: null
      })
    case SUCCESS_RESET_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_RESET_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        data: {},
        meta: {},
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
