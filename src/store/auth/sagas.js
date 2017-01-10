import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import api from 'services/api'
import { authLogin, currentUserRead, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../actions'

export const promises = {
  fbLogin: (options) => new Promise((resolve, reject) => {
    window.FB.login((response) => {
      // istanbul ignore else
      if (response.authResponse) {
        resolve(response.authResponse)
      } else {
        reject(response.status)
      }
    }, options)
  }),
  loadScript: (src) => new Promise((resolve, reject) => {
    const js = document.createElement('script')
    js.src = src
    js.onload = resolve
    js.onerror = reject
    document.head.appendChild(js)
  })
}

export const appendFbRoot = () => {
  const fbRoot = document.createElement('div')
  fbRoot.id = 'fb-root'
  document.body.appendChild(fbRoot)
}

export const serviceAction = (suffix, service) => (action) =>
  action.type === `AUTH_LOGIN_${suffix}` && action.service === service

export function* loginFacebook ({ scope = 'public_profile,email' } = {}) {
  try {
    const { accessToken } = yield call(promises.fbLogin, { scope })
    const { data } = yield call(api.post, '/auth/facebook', { access_token: accessToken })
    yield put(authLogin.success(data.token))
    yield put(currentUserRead.request())
  } catch (e) {
    yield put(authLogin.failure(e))
  }
}

export function* prepareFacebook ({ appId, version = 'v2.8', ...options }) {
  yield call(appendFbRoot)
  yield call(promises.loadScript, '//connect.facebook.net/en_US/sdk.js')
  yield call([window.FB, window.FB.init], { appId, version, ...options })
}

export function* watchAuthLoginFacebook () {
  const { options } = yield take(serviceAction('PREPARE', 'facebook'))
  yield call(prepareFacebook, options)
  while (true) {
    yield take(serviceAction('REQUEST', 'facebook'))
    yield call(loginFacebook)
  }
}

export function* watchAuthLoginSuccess () {
  while (true) {
    const { token } = yield take(AUTH_LOGIN_SUCCESS)
    yield [
      call(cookie.save, 'token', token, { path: '/' }),
      call(api.setToken, token)
    ]
  }
}

export function* watchAuthLogout () {
  while (true) {
    yield take(AUTH_LOGOUT)
    yield [
      call(cookie.remove, 'token', { path: '/' }),
      call(api.unsetToken)
    ]
  }
}

export default function* () {
  yield fork(watchAuthLoginFacebook)
  yield fork(watchAuthLoginSuccess)
  yield fork(watchAuthLogout)
}
