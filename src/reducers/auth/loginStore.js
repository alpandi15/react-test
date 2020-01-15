import {
  FETCH_LOGIN,
  RECEIVE_LOGIN,
  FAILED_LOGIN
} from '../../actions/types'

const initialState = {
  loading: false,
  data: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return Object.assign({}, state, {
        loading: true,
        data: {},
        meta: {},
        errorMessage: null
      })
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        errorMessage: null
      })
    case FAILED_LOGIN:
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
