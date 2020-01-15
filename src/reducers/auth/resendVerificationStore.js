import {
  FETCH_RESEND_VERIFICATION,
  RECEIVE_RESEND_VERIFICATION,
  FAILED_RESEND_VERIFICATION
} from '../../actions/types'

const initialState = {
  loading: false,
  data: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RESEND_VERIFICATION:
      return Object.assign({}, state, {
        loading: true,
        data: {},
        meta: {},
        errorMessage: null
      })
    case RECEIVE_RESEND_VERIFICATION:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_RESEND_VERIFICATION:
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
