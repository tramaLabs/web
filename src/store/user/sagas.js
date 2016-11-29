import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import { currentUserRead, CURRENT_USER_READ_REQUEST } from './actions'
import { AUTH_SUCCESS } from '../auth/actions'
import user from './schema'
import api from 'services/api'

const noop = () => {}

export function* readCurrentUser (resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, '/users/me')
    resolve(data)
    yield put(currentUserRead.success(normalize(data, user)))
  } catch (e) {
    reject(e)
    yield put(currentUserRead.failure(e))
  }
}

export function* watchCurrentUserReadRequest () {
  while (true) {
    const { resolve, reject } = yield take([CURRENT_USER_READ_REQUEST, AUTH_SUCCESS])
    yield call(readCurrentUser, resolve, reject)
  }
}

export default function* () {
  yield fork(watchCurrentUserReadRequest)
}
