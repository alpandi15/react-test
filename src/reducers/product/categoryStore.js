import {
  FETCH_CATEGORY,
  RECEIVE_CATEGORY,
  RECEIVE_ITEM_CATEGORY,
  FAILED_CATEGORY,
  UPDATE_STATE_CATEGORY
} from '../../actions/types'

const initialState = {
  loading: false,
  filter: {
    type: 'all',
    pageSize: 3
  },
  list: [],
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta
      })
    case RECEIVE_ITEM_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem
      })
    case FAILED_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    case UPDATE_STATE_CATEGORY:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
