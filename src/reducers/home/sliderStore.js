import {
  FETCH_SLIDER,
  RECEIVE_SLIDER,
  FAILED_SLIDER
} from '../../actions/types'

const initialState = {
  loading: false,
  listSlider: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SLIDER:
      return Object.assign({}, state, {
        loading: true,
        listSlider: []
      })
    case RECEIVE_SLIDER:
      return Object.assign({}, state, {
        loading: false,
        listSlider: action.payload.listSlider
      })
    case FAILED_SLIDER:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    default:
      return state
  }
}
