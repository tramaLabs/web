import { initialState } from './selectors'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case AUTH_SUCCESS:
    return {
      ...state,
      token: action.token
    }
  case AUTH_LOGOUT:
    return {
      ...state,
      token: initialState.token
    }
  default:
    return state
  }
}
