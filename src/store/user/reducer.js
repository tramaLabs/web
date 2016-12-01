import { initialState } from './selectors'
import { CURRENT_USER_READ_SUCCESS } from './actions'
import { AUTH_LOGOUT } from '../auth/actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case CURRENT_USER_READ_SUCCESS:
    return {
      ...state,
      currentId: action.result
    }
  case AUTH_LOGOUT:
    return {
      ...state,
      currentId: initialState.currentId
    }
  default:
    return state
  }
}
