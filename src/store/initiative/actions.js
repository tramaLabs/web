export const INITIATIVE_LIST = 'INITIATIVE_LIST'
export const INITIATIVE_LIST_REQUEST = 'INITIATIVE_LIST_REQUEST'
export const INITIATIVE_LIST_SUCCESS = 'INITIATIVE_LIST_SUCCESS'
export const INITIATIVE_LIST_FAILURE = 'INITIATIVE_LIST_FAILURE'
export const INITIATIVE_RETRIEVE = 'INITIATIVE_RETRIEVE'
export const INITIATIVE_RETRIEVE_REQUEST = 'INITIATIVE_RETRIEVE_REQUEST'
export const INITIATIVE_RETRIEVE_SUCCESS = 'INITIATIVE_RETRIEVE_SUCCESS'
export const INITIATIVE_RETRIEVE_FAILURE = 'INITIATIVE_RETRIEVE_FAILURE'
export const INITIATIVE_UPDATE = 'INITIATIVE_UPDATE'
export const INITIATIVE_UPDATE_REQUEST = 'INITIATIVE_UPDATE_REQUEST'
export const INITIATIVE_UPDATE_SUCCESS = 'INITIATIVE_UPDATE_SUCCESS'
export const INITIATIVE_UPDATE_FAILURE = 'INITIATIVE_UPDATE_FAILURE'
export const INITIATIVE_CREATE = 'INITIATIVE_CREATE'
export const INITIATIVE_CREATE_REQUEST = 'INITIATIVE_CREATE_REQUEST'
export const INITIATIVE_CREATE_SUCCESS = 'INITIATIVE_CREATE_SUCCESS'
export const INITIATIVE_CREATE_FAILURE = 'INITIATIVE_CREATE_FAILURE'

export const initiativeRetrieve = {
  request: (id, resolve, reject) => ({ type: INITIATIVE_RETRIEVE_REQUEST, id, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_RETRIEVE_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_RETRIEVE_FAILURE, error })
}

export const initiativeUpdate = {
  request: (id, data, resolve, reject) => ({
    type: INITIATIVE_UPDATE_REQUEST,
    id,
    data,
    resolve,
    reject
  }),
  success: (data) => ({ type: INITIATIVE_UPDATE_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_UPDATE_FAILURE, error })
}

export const initiativeList = {
  request: (params, resolve, reject) => ({
    type: INITIATIVE_LIST_REQUEST,
    params,
    resolve,
    reject
  }),
  success: (data) => ({ type: INITIATIVE_LIST_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_LIST_FAILURE, error })
}

export const initiativeCreate = {
  request: (data, resolve, reject) => ({ type: INITIATIVE_CREATE_REQUEST, data, resolve, reject }),
  success: (data) => ({ type: INITIATIVE_CREATE_SUCCESS, ...data }),
  failure: (error) => ({ type: INITIATIVE_CREATE_FAILURE, error })
}
