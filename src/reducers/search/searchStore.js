import {
  FETCH_SEARCH,
  RECEIVE_SEARCH,
  FAILED_SEARCH,
  RECEIVE_ITEM_SEARCH
} from 'actions/types'

const initialState = {
  loading: false,
  list: [],
  currentItem: {},
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta,
        errorMessage: null
      })
    case RECEIVE_ITEM_SEARCH:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        list: action.payload.list,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_SEARCH:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
