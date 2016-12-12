import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import { currentUserRead, CURRENT_USER_READ_REQUEST } from './actions'
import user from './schema'
import api from 'services/api'

// istanbul ignore next
const noop = () => {}

export function* readCurrentUser (resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, '/users/me')
    resolve(data)
    yield put(currentUserRead.success(normalize(data, user)))
  } catch ({ response }) {
    reject(response)
    yield put(currentUserRead.failure(response))
  }
}

export function* watchCurrentUserReadRequest () {
  while (true) {
    const { resolve, reject } = yield take(CURRENT_USER_READ_REQUEST)
    yield call(readCurrentUser, resolve, reject)
  }
}

export default function* () {
  yield fork(watchCurrentUserReadRequest)
}
