import {
  FETCH_HOME_INTRO,
  RECEIVE_HOME_INTRO,
  FAILED_HOME_INTRO
} from '../../actions/types'

const initialState = {
  loading: false,
  list: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_HOME_INTRO:
      return Object.assign({}, state, {
        loading: true,
        list: []
      })
    case RECEIVE_HOME_INTRO:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list
      })
    case FAILED_HOME_INTRO:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    default:
      return state
  }
}
