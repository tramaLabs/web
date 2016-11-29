export const CURRENT_USER_READ = 'CURRENT_USER_READ'
export const CURRENT_USER_READ_REQUEST = 'CURRENT_USER_READ_REQUEST'
export const CURRENT_USER_READ_SUCCESS = 'CURRENT_USER_READ_SUCCESS'
export const CURRENT_USER_READ_FAILURE = 'CURRENT_USER_READ_FAILURE'

export const currentUserRead = {
  request: (resolve, reject) => ({ type: CURRENT_USER_READ_REQUEST, resolve, reject }),
  success: (data) => ({ type: CURRENT_USER_READ_SUCCESS, ...data }),
  failure: (error) => ({ type: CURRENT_USER_READ_FAILURE, error })
}
