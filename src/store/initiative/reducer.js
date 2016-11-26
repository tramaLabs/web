import { initialState } from './selectors'
import { INITIATIVE_LIST_SUCCESS, INITIATIVE_CREATE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIATIVE_LIST_SUCCESS:
      return {
        ...state,
        list: action.list
      }
    case INITIATIVE_CREATE_SUCCESS:
      return {
        ...state,
        list: [ action.data, ...state.list ]
      }
    default:
      return state
  }
}
