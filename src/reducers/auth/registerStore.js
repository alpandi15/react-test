import {
  FETCH_REGISTER,
  RECEIVE_REGISTER,
  FAILED_REGISTER
} from '../../actions/types'

const initialState = {
  loading: false,
  data: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REGISTER:
      return Object.assign({}, state, {
        loading: true,
        data: {},
        meta: {},
        errorMessage: null
      })
    case RECEIVE_REGISTER:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_REGISTER:
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
