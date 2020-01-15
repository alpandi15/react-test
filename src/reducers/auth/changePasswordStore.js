import {
  FETCH_CHANGE_PASSWORD,
  RECEIVE_ITEM_CHANGE_PASSWORD,
  FAILED_CHANGE_PASSWORD
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CHANGE_PASSWORD:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RECEIVE_ITEM_CHANGE_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_CHANGE_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
