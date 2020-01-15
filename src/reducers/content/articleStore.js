import {
  FETCH_ARTICLE,
  RECEIVE_ITEM_ARTICLE,
  FAILED_ARTICLE
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return Object.assign({}, state, {
        loading: true,
        list: []
      })
    case RECEIVE_ITEM_ARTICLE:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem
      })
    case FAILED_ARTICLE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    default:
      return state
  }
}
