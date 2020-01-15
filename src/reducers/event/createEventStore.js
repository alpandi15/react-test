import {
  FETCH_CREATE_EVENT,
  RECEIVE_ITEM_CREATE_EVENT,
  FAILED_CREATE_EVENT
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CREATE_EVENT:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RECEIVE_ITEM_CREATE_EVENT:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_CREATE_EVENT:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
