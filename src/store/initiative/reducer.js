import { initialState } from './selectors'
import {
  INITIATIVE_LIST_READ_REQUEST,
  INITIATIVE_LIST_READ_SUCCESS,
  INITIATIVE_DETAIL_READ_REQUEST,
  INITIATIVE_DETAIL_READ_SUCCESS
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case INITIATIVE_LIST_READ_REQUEST:
    return {
      ...state,
      ids: initialState.ids
    }
  case INITIATIVE_LIST_READ_SUCCESS:
    return {
      ...state,
      ids: action.result
    }
  case INITIATIVE_DETAIL_READ_REQUEST:
  case INITIATIVE_DETAIL_READ_SUCCESS:
    return {
      ...state,
      id: action.id || action.result
    }
  default:
    return state
  }
}
