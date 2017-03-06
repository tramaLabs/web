export const INITIATIVE_CREATE = 'INITIATIVE_CREATE'
export const INITIATIVE_CREATE_REQUEST = 'INITIATIVE_CREATE_REQUEST'
export const INITIATIVE_CREATE_SUCCESS = 'INITIATIVE_CREATE_SUCCESS'
export const INITIATIVE_CREATE_FAILURE = 'INITIATIVE_CREATE_FAILURE'
export const INITIATIVE_LIST_READ = 'INITIATIVE_LIST_READ'
export const INITIATIVE_LIST_READ_REQUEST = 'INITIATIVE_LIST_READ_REQUEST'
export const INITIATIVE_LIST_READ_SUCCESS = 'INITIATIVE_LIST_READ_SUCCESS'
export const INITIATIVE_LIST_READ_FAILURE = 'INITIATIVE_LIST_READ_FAILURE'
export const INITIATIVE_DETAIL_READ = 'INITIATIVE_DETAIL_READ'
export const INITIATIVE_DETAIL_READ_REQUEST = 'INITIATIVE_DETAIL_READ_REQUEST'
export const INITIATIVE_DETAIL_READ_SUCCESS = 'INITIATIVE_DETAIL_READ_SUCCESS'
export const INITIATIVE_DETAIL_READ_FAILURE = 'INITIATIVE_DETAIL_READ_FAILURE'
export const INITIATIVE_UPDATE = 'INITIATIVE_UPDATE'
export const INITIATIVE_UPDATE_REQUEST = 'INITIATIVE_UPDATE_REQUEST'
export const INITIATIVE_UPDATE_SUCCESS = 'INITIATIVE_UPDATE_SUCCESS'
export const INITIATIVE_UPDATE_FAILURE = 'INITIATIVE_UPDATE_FAILURE'
export const INITIATIVE_JOIN = 'INITIATIVE_JOIN'
export const INITIATIVE_JOIN_REQUEST = 'INITIATIVE_JOIN_REQUEST'
export const INITIATIVE_JOIN_SUCCESS = 'INITIATIVE_JOIN_SUCCESS'
export const INITIATIVE_JOIN_FAILURE = 'INITIATIVE_JOIN_FAILURE'
export const INITIATIVE_LEAVE = 'INITIATIVE_LEAVE'
export const INITIATIVE_LEAVE_REQUEST = 'INITIATIVE_LEAVE_REQUEST'
export const INITIATIVE_LEAVE_SUCCESS = 'INITIATIVE_LEAVE_SUCCESS'
export const INITIATIVE_LEAVE_FAILURE = 'INITIATIVE_LEAVE_FAILURE'
export const INITIATIVE_PHOTO_UPDATE = 'INITIATIVE_PHOTO_UPDATE'
export const INITIATIVE_PHOTO_UPDATE_REQUEST = 'INITIATIVE_PHOTO_UPDATE_REQUEST'
export const INITIATIVE_PHOTO_UPDATE_SUCCESS = 'INITIATIVE_PHOTO_UPDATE_SUCCESS'
export const INITIATIVE_PHOTO_UPDATE_FAILURE = 'INITIATIVE_PHOTO_UPDATE_FAILURE'
export const INITIATIVE_PHOTO_UPDATE_PROGRESS = 'INITIATIVE_PHOTO_UPDATE_PROGRESS'
export const INITIATIVE_PHOTO_PREVIEW = 'INITIATIVE_PHOTO_PREVIEW'
export const INITIATIVE_PHOTO_PREVIEW_REQUEST = 'INITIATIVE_PHOTO_PREVIEW_REQUEST'
export const INITIATIVE_PHOTO_PREVIEW_SUCCESS = 'INITIATIVE_PHOTO_PREVIEW_SUCCESS'
export const INITIATIVE_PHOTO_PREVIEW_FAILURE = 'INITIATIVE_PHOTO_PREVIEW_FAILURE'
export const INITIATIVE_PHOTO_PREVIEW_CANCEL = 'INITIATIVE_PHOTO_PREVIEW_CANCEL'
export const INITIATIVE_DONORS_UPDATE_REQUEST = 'INITIATIVE_DONORS_UPDATE_REQUEST'
export const INITIATIVE_DONORS_UPDATE_SUCCESS = 'INITIATIVE_DONORS_UPDATE_SUCCESS'
export const INITIATIVE_DONORS_UPDATE_FAILURE = 'INITIATIVE_DONORS_UPDATE_FAILURE'
export const INITIATIVE_DONORS_UPDATE_PROGRESS = 'INITIATIVE_DONORS_UPDATE_PROGRESS'

export const initiativeCreate = {
  request: (data, resolve, reject) => ({ type: INITIATIVE_CREATE_REQUEST, data, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_CREATE_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_CREATE_FAILURE, error })
}

export const initiativeListRead = {
  request: (params, resolve, reject) =>
    ({ type: INITIATIVE_LIST_READ_REQUEST, params, resolve, reject }),
  success: (list) => ({ type: INITIATIVE_LIST_READ_SUCCESS, list }),
  failure: (error) => ({ type: INITIATIVE_LIST_READ_FAILURE, error })
}

export const initiativeDetailRead = {
  request: (id, resolve, reject) => ({ type: INITIATIVE_DETAIL_READ_REQUEST, id, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_DETAIL_READ_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_DETAIL_READ_FAILURE, error })
}

export const initiativeUpdate = {
  request: (id, data, resolve, reject) =>
  ({ type: INITIATIVE_UPDATE_REQUEST, id, data, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_UPDATE_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_UPDATE_FAILURE, error })
}

export const initiativeJoin = {
  request: (id, resolve, reject) => ({ type: INITIATIVE_JOIN_REQUEST, id, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_JOIN_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_JOIN_FAILURE, error })
}

export const initiativeLeave = {
  request: (id, resolve, reject) => ({ type: INITIATIVE_LEAVE_REQUEST, id, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_LEAVE_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_LEAVE_FAILURE, error })
}

export const initiativePhotoUpdate = {
  request: (id, data, resolve, reject) =>
    ({ type: INITIATIVE_PHOTO_UPDATE_REQUEST, id, data, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_PHOTO_UPDATE_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_PHOTO_UPDATE_FAILURE, error }),
  progress: (progress) => ({ type: INITIATIVE_PHOTO_UPDATE_PROGRESS, progress })
}

export const initiativeDonorsUpdate = {
  request: (id, demandId, user, quantity, resolve, reject) =>
    ({ type: INITIATIVE_DONORS_UPDATE_REQUEST, id, demandId, user, quantity, resolve, reject }),
  success: (detail) => ({ type: INITIATIVE_DONORS_UPDATE_SUCCESS, detail }),
  failure: (error) => ({ type: INITIATIVE_DONORS_UPDATE_FAILURE, error }),
  progress: (progress) => ({ type: INITIATIVE_DONORS_UPDATE_PROGRESS, progress })
}

export const initiativePhotoPreview = {
  request: (data) => ({ type: INITIATIVE_PHOTO_PREVIEW_REQUEST, data }),
  success: (url) => ({ type: INITIATIVE_PHOTO_PREVIEW_SUCCESS, url }),
  failure: (error) => ({ type: INITIATIVE_PHOTO_PREVIEW_FAILURE, error }),
  cancel: () => ({ type: INITIATIVE_PHOTO_PREVIEW_CANCEL })
}
