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

export const initiativeCreate = {
  request: (data, resolve, reject) => ({ type: INITIATIVE_CREATE_REQUEST, data, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_CREATE_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_CREATE_FAILURE, error })
}

export const initiativeListRead = {
  request: (params, resolve, reject) =>
    ({ type: INITIATIVE_LIST_READ_REQUEST, params, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_LIST_READ_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_LIST_READ_FAILURE, error })
}

export const initiativeDetailRead = {
  request: (id, resolve, reject) => ({ type: INITIATIVE_DETAIL_READ_REQUEST, id, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_DETAIL_READ_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_DETAIL_READ_FAILURE, error })
}

export const initiativeUpdate = {
  request: (id, data, resolve, reject) =>
  ({ type: INITIATIVE_UPDATE_REQUEST, id, data, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_UPDATE_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_UPDATE_FAILURE, error })
}
