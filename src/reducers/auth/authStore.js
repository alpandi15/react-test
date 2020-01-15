import {
  FETCH_AUTH,
  RECEIVE_ITEM_AUTH,
  FAILED_AUTH
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_AUTH:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RECEIVE_ITEM_AUTH:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        errorMessage: null
      })
    case FAILED_AUTH:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
