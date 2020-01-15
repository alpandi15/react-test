import {
  FETCH_FACILITY,
  RECEIVE_FACILITY,
  FAILED_RECEIVE_FACILITY
} from 'actions/types'

const initialState = {
  loading: false,
  meta: {},
  facility: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FACILITY:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_FACILITY:
      return Object.assign({}, state, {
        loading: false,
        facility: action.payload.facility,
        meta: action.payload.meta
      })
    case FAILED_RECEIVE_FACILITY:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    default:
      return state
  }
}
