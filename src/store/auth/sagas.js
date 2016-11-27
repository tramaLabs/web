import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { authFacebook, AUTH_FACEBOOK_REQUEST } from './actions'
import api, { setToken } from 'services/api'

const fn = () => true

export function* facebookAuth (fbToken, resolve = fn, reject = fn) {
  try {
    const { token } = yield call(api.post, '/auth/facebook', { access_token: fbToken })
    resolve(token)
    yield call(cookie.save, 'token', token, { path: '/' })
    yield call(setToken, token)
    yield put(authFacebook.success(token))
  } catch (e) {
    reject(e)
    yield put(authFacebook.failure(e))
  }
}

export function* watchAuthFacebookRequest () {
  while (true) {
    const { fbToken, resolve, reject } = yield take(AUTH_FACEBOOK_REQUEST)
    yield call(facebookAuth, fbToken, resolve, reject)
  }
}

export default function* () {
  yield fork(watchAuthFacebookRequest)
}
