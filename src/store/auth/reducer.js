import { initialState } from './selectors'
import { AUTH_FACEBOOK_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FACEBOOK_SUCCESS:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}
