import { initialState } from './selectors'
import { SNACK_SHOW, SNACK_HIDE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SNACK_SHOW:
      return {
        ...state,
        message: action.message,
        palette: action.palette,
        show: true
      }
    case SNACK_HIDE:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}
