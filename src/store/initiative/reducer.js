import { LOCATION_CHANGE } from 'react-router-redux'
import { initialState } from './selectors'
import {
  INITIATIVE_LIST_READ_REQUEST,
  INITIATIVE_LIST_READ_SUCCESS,
  INITIATIVE_DETAIL_READ_REQUEST,
  INITIATIVE_DETAIL_READ_SUCCESS,
  INITIATIVE_PHOTO_UPDATE_REQUEST,
  INITIATIVE_PHOTO_UPDATE_SUCCESS,
  INITIATIVE_PHOTO_UPDATE_FAILURE,
  INITIATIVE_PHOTO_UPDATE_PROGRESS,
  INITIATIVE_PHOTO_PREVIEW_REQUEST,
  INITIATIVE_PHOTO_PREVIEW_SUCCESS,
  INITIATIVE_PHOTO_PREVIEW_FAILURE,
  INITIATIVE_PHOTO_PREVIEW_CANCEL
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
    return photo(state, action)
  }
}

const photo = (state, action) => {
  switch (action.type) {
  case INITIATIVE_PHOTO_UPDATE_REQUEST:
  case INITIATIVE_PHOTO_UPDATE_FAILURE:
    return {
      ...state,
      photoUpdateProgress: initialState.photoUpdateProgress
    }
  case INITIATIVE_PHOTO_UPDATE_PROGRESS:
    return {
      ...state,
      photoUpdateProgress: action.progress
    }
  case INITIATIVE_PHOTO_UPDATE_SUCCESS:
  case LOCATION_CHANGE:
    return {
      ...state,
      photoUpdateProgress: initialState.photoUpdateProgress,
      photoPreviewUrl: initialState.photoPreviewUrl
    }
  case INITIATIVE_PHOTO_PREVIEW_REQUEST:
  case INITIATIVE_PHOTO_PREVIEW_FAILURE:
  case INITIATIVE_PHOTO_PREVIEW_CANCEL:
    return {
      ...state,
      photoPreviewUrl: initialState.photoPreviewUrl
    }
  case INITIATIVE_PHOTO_PREVIEW_SUCCESS:
    return {
      ...state,
      photoPreviewUrl: action.url
    }
  default:
    return state
  }
}
