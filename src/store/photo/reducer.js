import { initialState } from './selectors'
import {
  PHOTO_UPLOAD_REQUEST,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_UPLOAD_FAILURE,
  PHOTO_UPLOAD_PROGRESS,
  PHOTO_PREVIEW_REQUEST,
  PHOTO_PREVIEW_SUCCESS,
  PHOTO_PREVIEW_CANCEL
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case PHOTO_UPLOAD_REQUEST:
  case PHOTO_UPLOAD_SUCCESS:
  case PHOTO_UPLOAD_FAILURE:
    return initialState
  case PHOTO_UPLOAD_PROGRESS:
    return {
      ...state,
      uploadProgress: action.progress
    }
  case PHOTO_PREVIEW_REQUEST:
  case PHOTO_PREVIEW_CANCEL:
    return {
      ...state,
      previewUrl: initialState.previewUrl
    }
  case PHOTO_PREVIEW_SUCCESS:
    return {
      ...state,
      previewUrl: action.url
    }
  default:
    return state
  }
}
