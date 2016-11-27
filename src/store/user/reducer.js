import { initialState } from './selectors'
import { CURRENT_USER_RETRIEVE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case CURRENT_USER_RETRIEVE_SUCCESS:
    return {
      ...state,
      current: action.data
    }
  default:
    return state
  }
}
