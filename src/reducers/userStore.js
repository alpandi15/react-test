import {
  FETCH_USER
} from '../actions/types'

const initialState = {
  isFetching: false,
  user: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}
