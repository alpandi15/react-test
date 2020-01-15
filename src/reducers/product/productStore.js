import {
  FETCH_PRODUCT,
  RECEIVE_PRODUCT,
  RECEIVE_ITEM_PRODUCT,
  FAILED_PRODUCT,
  UPDATE_STATE_PRODUCT
} from '../../actions/types'

const initialState = {
  loading: false,
  filter: {
    q: '',
    page: 1,
    pageSize: 15
  },
  list: [],
  meta: {},
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta
      })
    case RECEIVE_ITEM_PRODUCT:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem
      })
    case FAILED_PRODUCT:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    case UPDATE_STATE_PRODUCT:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
