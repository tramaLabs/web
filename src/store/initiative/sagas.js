import { arrayOf, normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import {
  initiativeList,
  initiativeRetrieve,
  initiativeUpdate,
  initiativeCreate,
  INITIATIVE_CREATE_REQUEST,
  INITIATIVE_RETRIEVE_REQUEST,
  INITIATIVE_LIST_REQUEST,
  INITIATIVE_UPDATE_REQUEST
} from './actions'
import initiative from './schema'
import api from 'services/api'

const fn = () => true

export function* createInitiative (newData, resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.post, '/initiatives', newData)
    resolve(data)
    yield put(initiativeCreate.success(normalize(data, initiative)))
  } catch (e) {
    reject(e)
    yield put(initiativeCreate.failure(e))
  }
}

export function* retrieveInitiative (id, resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.get, `/initiatives/${id}`)
    resolve(data)
    yield put(initiativeRetrieve.success(normalize(data, initiative)))
  } catch (e) {
    reject(e)
    yield put(initiativeRetrieve.failure(e))
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

export function* updateInitiative (id, newData, resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}`, newData)
    resolve(data)
    yield put(initiativeUpdate.success(normalize(data, initiative)))
  } catch (e) {
    reject(e)
    yield put(initiativeUpdate.failure(e))
  }
}

export function* watchInitiativeCreateRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(INITIATIVE_CREATE_REQUEST)
    yield call(createInitiative, data, resolve, reject)
  }
}

export function* watchInitiativeRetrieveRequest () {
  while (true) {
    const { id, resolve, reject } = yield take(INITIATIVE_RETRIEVE_REQUEST)
    yield call(retrieveInitiative, id, resolve, reject)
  }
}

export function* watchInitiativeListRequest () {
  while (true) {
    const { limit, resolve, reject } = yield take(INITIATIVE_LIST_REQUEST)
    yield call(listInitiatives, limit, resolve, reject)
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
  yield fork(watchInitiativeRetrieveRequest)
  yield fork(watchInitiativeListRequest)
  yield fork(watchInitiativeUpdateRequest)
}
