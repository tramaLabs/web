export const INITIATIVE_LIST = 'INITIATIVE_LIST'
export const INITIATIVE_LIST_REQUEST = 'INITIATIVE_LIST_REQUEST'
export const INITIATIVE_LIST_SUCCESS = 'INITIATIVE_LIST_SUCCESS'
export const INITIATIVE_LIST_FAILURE = 'INITIATIVE_LIST_FAILURE'
export const INITIATIVE_CREATE = 'INITIATIVE_CREATE'
export const INITIATIVE_CREATE_REQUEST = 'INITIATIVE_CREATE_REQUEST'
export const INITIATIVE_CREATE_SUCCESS = 'INITIATIVE_CREATE_SUCCESS'
export const INITIATIVE_CREATE_FAILURE = 'INITIATIVE_CREATE_FAILURE'

export const initiativeList = {
  request: (limit, resolve, reject) => ({ type: INITIATIVE_LIST_REQUEST, limit, resolve, reject }),
  success: (list) => ({ type: INITIATIVE_LIST_SUCCESS, list }),
  failure: (error) => ({ type: INITIATIVE_LIST_FAILURE, error })
}

export const initiativeCreate = {
  request: (data, resolve, reject) => ({ type: INITIATIVE_CREATE_REQUEST, data, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_CREATE_SUCCESS, data }),
  failure: (error) => ({ type: INITIATIVE_CREATE_FAILURE, error })
}
