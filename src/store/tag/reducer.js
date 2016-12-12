import { initialState } from './selectors'
import { TAG_LIST_READ_REQUEST, TAG_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case TAG_LIST_READ_REQUEST:
    return {
      ...state,
      ids: initialState.ids
    }
  case TAG_LIST_READ_SUCCESS:
    return {
      ...state,
      ids: action.result
    }
  default:
    return state
  }
}
