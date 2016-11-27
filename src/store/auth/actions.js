export const AUTH_FACEBOOK = 'AUTH_FACEBOOK'
export const AUTH_FACEBOOK_REQUEST = 'AUTH_FACEBOOK_REQUEST'
export const AUTH_FACEBOOK_SUCCESS = 'AUTH_FACEBOOK_SUCCESS'
export const AUTH_FACEBOOK_FAILURE = 'AUTH_FACEBOOK_FAILURE'

export const authFacebook = {
  request: (fbToken, resolve, reject) => ({
    type: AUTH_FACEBOOK_REQUEST,
    fbToken,
    resolve,
    reject
  }),
  success: (token) => ({ type: AUTH_FACEBOOK_SUCCESS, token }),
  failure: (error) => ({ type: AUTH_FACEBOOK_FAILURE, error })
}
