export const CURRENT_USER_RETRIEVE = 'CURRENT_USER_RETRIEVE'
export const CURRENT_USER_RETRIEVE_REQUEST = 'CURRENT_USER_RETRIEVE_REQUEST'
export const CURRENT_USER_RETRIEVE_SUCCESS = 'CURRENT_USER_RETRIEVE_SUCCESS'
export const CURRENT_USER_RETRIEVE_FAILURE = 'CURRENT_USER_RETRIEVE_FAILURE'

export const currentUserRetrieve = {
  request: (resolve, reject) => ({ type: CURRENT_USER_RETRIEVE_REQUEST, resolve, reject }),
  success: (data) => ({ type: CURRENT_USER_RETRIEVE_SUCCESS, data }),
  failure: (error) => ({ type: CURRENT_USER_RETRIEVE_FAILURE, error })
}
