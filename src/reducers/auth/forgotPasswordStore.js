import {
  FETCH_FORGOT_PASSWORD,
  RECEIVE_ITEM_FORGOT_PASSWORD,
  FAILED_FORGOT_PASSWORD
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FORGOT_PASSWORD:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RECEIVE_ITEM_FORGOT_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_FORGOT_PASSWORD:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
