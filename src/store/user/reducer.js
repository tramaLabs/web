import { initialState } from './selectors'
import { CURRENT_USER_READ_SUCCESS } from './actions'
import { AUTH_LOGOUT } from '../auth/actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case CURRENT_USER_READ_SUCCESS:
    return {
      ...state,
      currentDetail: action.detail
    }
  case AUTH_LOGOUT:
    return {
      ...state,
      currentDetail: initialState.currentDetail
    }
  default:
    return state
  }
}
