import { LOCATION_CHANGE } from 'react-router-redux'
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
import { INITIATIVE_DETAIL_READ_SUCCESS, INITIATIVE_UPDATE_SUCCESS } from '../initiative/actions'

export default (state = initialState, action) => {
  switch (action.type) {
  case PHOTO_UPLOAD_REQUEST:
  case PHOTO_UPLOAD_FAILURE:
    return {
      ...state,
      id: initialState.id,
      uploadProgress: initialState.uploadProgress
    }
  case PHOTO_UPLOAD_SUCCESS:
    return {
      ...state,
      id: action.result,
      uploadProgress: initialState.uploadProgress,
      previewUrl: initialState.previewUrl
    }
  case PHOTO_UPLOAD_PROGRESS:
    return {
      ...state,
      uploadProgress: action.progress
    }
  case INITIATIVE_DETAIL_READ_SUCCESS:
  case INITIATIVE_UPDATE_SUCCESS:
  case LOCATION_CHANGE:
    return initialState
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
