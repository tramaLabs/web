import { LOCATION_CHANGE } from 'react-router-redux'
import { initialState } from './selectors'
import { TAG_LIST_EXTRACT_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        list: initialState.list
      }
    case TAG_LIST_EXTRACT_SUCCESS:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}
