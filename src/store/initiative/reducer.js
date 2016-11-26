import { initialState } from './selectors'
import { INITIATIVE_LIST_SUCCESS, INITIATIVE_RETRIEVE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIATIVE_LIST_SUCCESS:
      return {
        ...state,
        list: action.result
      }
    case INITIATIVE_RETRIEVE_SUCCESS:
      return {
        ...state,
        item: action.result
      }
    default:
      return state
  }
}
