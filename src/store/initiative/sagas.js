import { arrayOf, normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import {
  initiativeCreate,
  initiativeListRead,
  initiativeDetailRead,
  initiativeUpdate,
  INITIATIVE_CREATE_REQUEST,
  INITIATIVE_LIST_READ_REQUEST,
  INITIATIVE_DETAIL_READ_REQUEST,
  INITIATIVE_UPDATE_REQUEST
} from './actions'
import initiative from './schema'
import api from 'services/api'

const noop = () => {}

export function* createInitiative (newData, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.post, '/initiatives', newData)
    resolve(data)
    yield put(initiativeCreate.success(normalize(data, initiative)))
  } catch ({ response }) {
    reject(response)
    yield put(initiativeCreate.failure(response))
  }
}

export function* readInitiativeList (params, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, '/initiatives', { params })
    resolve(data)
    yield put(initiativeListRead.success(normalize(data, arrayOf(initiative))))
  } catch ({ response }) {
    reject(response)
    yield put(initiativeListRead.failure(response))
  }
}

export function* readInitiativeDetail (id, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, `/initiatives/${id}`)
    resolve(data)
    yield put(initiativeDetailRead.success(normalize(data, initiative)))
  } catch ({ response }) {
    reject(response)
    yield put(initiativeDetailRead.failure(response))
  }
}

export function* updateInitiative (id, newData, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}`, newData)
    resolve(data)
    yield put(initiativeUpdate.success(normalize(data, initiative)))
  } catch ({ response }) {
    reject(response)
    yield put(initiativeUpdate.failure(response))
  }
}

export function* watchInitiativeCreateRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(INITIATIVE_CREATE_REQUEST)
    yield call(createInitiative, data, resolve, reject)
  }
}

export function* watchInitiativeListReadRequest () {
  while (true) {
    const { params, resolve, reject } = yield take(INITIATIVE_LIST_READ_REQUEST)
    yield call(readInitiativeList, params, resolve, reject)
  }
}

export function* watchInitiativeDetailReadRequest () {
  while (true) {
    const { id, resolve, reject } = yield take(INITIATIVE_DETAIL_READ_REQUEST)
    yield call(readInitiativeDetail, id, resolve, reject)
  }
}

export function* watchInitiativeUpdateRequest () {
  while (true) {
    const { id, data, resolve, reject } = yield take(INITIATIVE_UPDATE_REQUEST)
    yield call(updateInitiative, id, data, resolve, reject)
  }
}

export default function* () {
  yield fork(watchInitiativeCreateRequest)
  yield fork(watchInitiativeListReadRequest)
  yield fork(watchInitiativeDetailReadRequest)
  yield fork(watchInitiativeUpdateRequest)
}
