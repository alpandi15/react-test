import {
  SUCCESS_ORGANIZER,
  FETCH_ORGANIZER,
  RECEIVE_ORGANIZER,
  RECEIVE_ITEM_ORGANIZER,
  FAILED_ORGANIZER,
  UPDATE_STATE_ORGANIZER
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
  count: {},
  facility: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_ORGANIZER:
      return Object.assign({}, state, {
        meta: action.payload.meta
      })
    case FETCH_ORGANIZER:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_ORGANIZER:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        facility: action.payload.facility,
        count: action.payload.count,
        currentItem: action.payload.data,
        meta: action.payload.meta
      })
    case RECEIVE_ITEM_ORGANIZER:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem
      })
    case FAILED_ORGANIZER:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    case UPDATE_STATE_ORGANIZER:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
