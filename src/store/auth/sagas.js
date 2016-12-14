import { take, put, call, fork } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { auth, AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT } from './actions'
import { currentUserRead } from '../user/actions'
import { snackShow } from '../snack/actions'
import api from 'services/api'

export function* serviceAuth (service, serviceToken) {
  try {
    const { data } = yield call(api.post, `/auth/${service}`, { access_token: serviceToken })
    yield put(auth.success(data.token))
    yield put(currentUserRead.request())
  } catch (error) {
    yield put(auth.failure(error))
    yield put(snackShow('Não foi possível conectar', 'danger'))
  }
}

export function* watchAuthSuccess () {
  while (true) {
    const { token } = yield take(AUTH_SUCCESS)
    yield [
      call(cookie.save, 'token', token, { path: '/' }),
      call(api.setToken, token)
    ]
    yield put(snackShow('Bem-vindo, trameiro!', 'success'))
  }
}

export function* watchAuthLogout () {
  while (true) {
    yield take(AUTH_LOGOUT)
    yield [
      call(cookie.remove, 'token', { path: '/' }),
      call(api.unsetToken)
    ]
    yield put(snackShow('Desconectado.', 'grayscale'))
  }
}

export function* watchAuthRequest () {
  while (true) {
    const { service, accessToken } = yield take(AUTH_REQUEST)
    yield call(serviceAuth, service, accessToken)
  }
}

export default function* () {
  yield fork(watchAuthSuccess)
  yield fork(watchAuthLogout)
  yield fork(watchAuthRequest)
}
