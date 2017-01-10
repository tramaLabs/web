export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_PREPARE = 'AUTH_LOGIN_PREPARE'
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const authLogin = {
  prepare: (service, options) => ({ type: AUTH_LOGIN_PREPARE, service, options }),
  request: (service, resolve, reject) => ({ type: AUTH_LOGIN_REQUEST, service, resolve, reject }),
  success: (token) => ({ type: AUTH_LOGIN_SUCCESS, token }),
  failure: (error) => ({ type: AUTH_LOGIN_FAILURE, error })
}

export const authLogout = () => ({ type: AUTH_LOGOUT })
