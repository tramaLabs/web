export const TAG_CREATE = 'TAG_CREATE'
export const TAG_CREATE_REQUEST = 'TAG_CREATE_REQUEST'
export const TAG_CREATE_SUCCESS = 'TAG_CREATE_SUCCESS'
export const TAG_CREATE_FAILURE = 'TAG_CREATE_FAILURE'
export const TAG_LIST_READ = 'TAG_LIST_READ'
export const TAG_LIST_READ_REQUEST = 'TAG_LIST_READ_REQUEST'
export const TAG_LIST_READ_SUCCESS = 'TAG_LIST_READ_SUCCESS'
export const TAG_LIST_READ_FAILURE = 'TAG_LIST_READ_FAILURE'
export const TAG_LIST_EXTRACT = 'TAG_LIST_EXTRACT'
export const TAG_LIST_EXTRACT_REQUEST = 'TAG_LIST_EXTRACT_REQUEST'
export const TAG_LIST_EXTRACT_SUCCESS = 'TAG_LIST_EXTRACT_SUCCESS'
export const TAG_LIST_EXTRACT_FAILURE = 'TAG_LIST_EXTRACT_FAILURE'

export const tagCreate = {
  request: (data, resolve, reject) => ({ type: TAG_CREATE_REQUEST, data, resolve, reject }),
  success: (detail) => ({ type: TAG_CREATE_SUCCESS, detail }),
  failure: (error) => ({ type: TAG_CREATE_FAILURE, error })
}

export const tagListRead = {
  request: (params, resolve, reject) => ({ type: TAG_LIST_READ_REQUEST, params, resolve, reject }),
  success: (list) => ({ type: TAG_LIST_READ_SUCCESS, list }),
  failure: (error) => ({ type: TAG_LIST_READ_FAILURE, error })
}

export const tagListExtract = {
  request: (text, resolve, reject) => ({ type: TAG_LIST_EXTRACT_REQUEST, text, resolve, reject }),
  success: (list) => ({ type: TAG_LIST_EXTRACT_SUCCESS, list }),
  failure: (error) => ({ type: TAG_LIST_EXTRACT_FAILURE, error })
}
