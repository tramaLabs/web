export const initialState = {
  list: [],
  detail: null,
  photoUpdateProgress: 0,
  photoPreviewUrl: null
}

export const getList = (state = initialState) => state.list || initialState.list
export const getDetail = (state = initialState) => state.detail || initialState.detail
export const getPhotoUpdateProgress = (state = initialState) =>
  state.photoUpdateProgress || initialState.photoUpdateProgress
export const getPhotoPreviewUrl = (state = initialState) =>
  state.photoPreviewUrl || initialState.photoPreviewUrl
