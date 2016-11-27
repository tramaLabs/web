export const AUTH = 'AUTH'
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const auth = {
  success: (token) => ({ type: AUTH_SUCCESS, token }),
  failure: (error) => ({ type: AUTH_FAILURE, error })
}

export const authFacebook = {
  request: (accessToken, resolve, reject) => ({
    type: AUTH_REQUEST,
    service: 'facebook',
    accessToken,
    resolve,
    reject
  })
}

export const authLogout = () => ({ type: AUTH_LOGOUT })
