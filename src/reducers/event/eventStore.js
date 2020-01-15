import {
  FETCH_EVENT,
  RECEIVE_EVENT,
  RESET_ITEM_EVENT,
  RECEIVE_ITEM_EVENT,
  FAILED_EVENT
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  group: [],
  asset: [],
  list: [],
  meta: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_EVENT:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      })
    case RESET_ITEM_EVENT:
      return Object.assign({}, state, {
        loading: false,
        currentItem: {},
        asset: [],
        errorMessage: null
      })
    case RECEIVE_ITEM_EVENT:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem,
        group: action.payload.currentItem && action.payload.currentItem.groups ? action.payload.currentItem.groups : [],
        asset: action.payload.currentItem && action.payload.currentItem.assets ? action.payload.currentItem.assets : [],
        errorMessage: null
      })
    case RECEIVE_EVENT:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta,
        errorMessage: null
      })
    case FAILED_EVENT:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.errorMessage
      })
    default:
      return state
  }
}
