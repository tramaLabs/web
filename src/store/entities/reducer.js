import merge from 'lodash/merge'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  if (action.entities) {
    return merge({}, state, action.entities)
  }
  return state
}
