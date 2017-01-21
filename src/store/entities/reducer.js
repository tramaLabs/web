import mergeWith from 'lodash/mergeWith'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  if (action.entities) {
    return mergeWith({}, state, action.entities, (objValue, srcValue) =>
      Array.isArray(srcValue) ? srcValue : undefined
    )
  }
  return state
}
