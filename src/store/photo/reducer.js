import { initialState } from './selectors'
import { PHOTO_UPLOAD_REQUEST, PHOTO_UPLOAD_PROGRESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case PHOTO_UPLOAD_REQUEST:
    return {
      ...state,
      progress: initialState.progress
    }
  case PHOTO_UPLOAD_PROGRESS:
    return {
      ...state,
      progress: action.progress
    }
  default:
    return state
  }
}
