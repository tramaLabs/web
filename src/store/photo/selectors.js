export const initialState = {
  id: null,
  uploadProgress: 0,
  previewUrl: null
}

export const getId = (state = initialState) => state.id || initialState.id

export const getUploadProgress = (state = initialState) =>
  state.uploadProgress || initialState.uploadProgress

export const getPreviewUrl = (state = initialState) =>
  state.previewUrl || initialState.previewUrl
