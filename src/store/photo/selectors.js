export const initialState = {
  uploadProgress: 0,
  previewUrl: null
}

export const getUploadProgress = (state = initialState) =>
  state.uploadProgress || initialState.uploadProgress

export const getPreviewUrl = (state = initialState) =>
  state.previewUrl || initialState.previewUrl
