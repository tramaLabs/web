export const initialState = {
  ids: [],
  id: null,
  photoUpdateProgress: 0,
  photoPreviewUrl: null
}

export const getIds = (state = initialState) => state.ids || initialState.ids
export const getId = (state = initialState) => state.id || initialState.id
export const getPhotoUpdateProgress = (state = initialState) =>
  state.photoUpdateProgress || initialState.photoUpdateProgress
export const getPhotoPreviewUrl = (state = initialState) =>
  state.photoPreviewUrl || initialState.photoPreviewUrl
