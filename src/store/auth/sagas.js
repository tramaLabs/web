import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { auth, AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT } from './actions'
import { currentUserRead } from '../user/actions'
import api from 'services/api'

// istanbul ignore next
const noop = () => {}

export function* serviceAuth (service, serviceToken, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.post, `/auth/${service}`, { access_token: serviceToken })
    yield put(auth.success(data.token))
    yield put(currentUserRead.request(resolve))
  } catch (error) {
    yield put(auth.failure(error.data))
    reject(error)
  }
}

export function* watchAuthSuccess () {
  while (true) {
    const { token } = yield take(AUTH_SUCCESS)
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

export function* watchAuthRequest () {
  while (true) {
    const { service, accessToken, resolve, reject } = yield take(AUTH_REQUEST)
    yield call(serviceAuth, service, accessToken, resolve, reject)
  }
}

export default function* () {
  yield fork(watchAuthSuccess)
  yield fork(watchAuthLogout)
  yield fork(watchAuthRequest)
}
