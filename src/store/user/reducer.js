import { initialState } from './selectors'
import { CURRENT_USER_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case CURRENT_USER_READ_SUCCESS:
    return {
      ...state,
      currentId: action.result
    }
  default:
    return state
  }
}
