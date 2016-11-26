import { arrayOf, normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import { initiativeList, initiativeCreate, INITIATIVE_LIST_REQUEST, INITIATIVE_CREATE_REQUEST } from './actions'
import initiative from './schema'
import api from 'services/api'

const fn = () => true

export function* createInitiative (newData, resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.post, '/initiatives', { id: 1, ...newData })
    resolve(data)
    yield put(initiativeCreate.success(normalize(data, initiative)))
  } catch (e) {
    reject(e)
    yield put(initiativeCreate.failure(e))
  }
}

export function* listInitiatives (limit, resolve = fn, reject = fn) {
  try {
    const params = { _limit: limit }
    const { data } = yield call(api.get, '/initiatives', { params })
    resolve(data)
    yield put(initiativeList.success(normalize(data, arrayOf(initiative))))
  } catch (e) {
    reject(e)
    yield put(initiativeList.failure(e))
  }
}

export function* watchInitiativeCreateRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(INITIATIVE_CREATE_REQUEST)
    yield call(createInitiative, data, resolve, reject)
  }
}

export function* watchInitiativeListRequest () {
  while (true) {
    const { limit, resolve, reject } = yield take(INITIATIVE_LIST_REQUEST)
    yield call(listInitiatives, limit, resolve, reject)
  }
}

export default function* () {
  yield fork(watchInitiativeCreateRequest)
  yield fork(watchInitiativeListRequest)
}
