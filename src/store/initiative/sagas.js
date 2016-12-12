import { arrayOf, normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import {
  initiativeCreate,
  initiativeListRead,
  initiativeDetailRead,
  initiativeUpdate,
  initiativeJoin,
  initiativeLeave,
  INITIATIVE_CREATE_REQUEST,
  INITIATIVE_LIST_READ_REQUEST,
  INITIATIVE_DETAIL_READ_REQUEST,
  INITIATIVE_UPDATE_REQUEST,
  INITIATIVE_JOIN_REQUEST,
  INITIATIVE_LEAVE_REQUEST
} from './actions'
import initiative from './schema'
import api from 'services/api'

// istanbul ignore next
const noop = () => {}

export function* createInitiative (newData, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.post, '/initiatives', newData)
    yield put(initiativeCreate.success(normalize(data, initiative)))
    resolve(data)
  } catch (error) {
    yield put(initiativeCreate.failure(error.data))
    reject(error)
  }
}

export function* readInitiativeList (params, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, '/initiatives', { params })
    yield put(initiativeListRead.success(normalize(data, arrayOf(initiative))))
    resolve(data)
  } catch (error) {
    yield put(initiativeListRead.failure(error.data))
    reject(error)
  }
}

export function* readInitiativeDetail (id, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.get, `/initiatives/${id}`)
    yield put(initiativeDetailRead.success(normalize(data, initiative)))
    resolve(data)
  } catch (error) {
    yield put(initiativeDetailRead.failure(error.data))
    reject(error)
  }
}

export function* updateInitiative (id, newData, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}`, newData)
    yield put(initiativeUpdate.success(normalize(data, initiative)))
    resolve(data)
  } catch (error) {
    yield put(initiativeUpdate.failure(error.data))
    reject(error)
  }
}

export function* joinInitiative (id, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/join`)
    yield put(initiativeJoin.success(normalize(data, initiative)))
    resolve(data)
  } catch (error) {
    yield put(initiativeJoin.failure(error.data))
    reject(error)
  }
}

export function* leaveInitiative (id, resolve = noop, reject = noop) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/leave`)
    yield put(initiativeLeave.success(normalize(data, initiative)))
    resolve(data)
  } catch (error) {
    yield put(initiativeLeave.failure(error.data))
    reject(error)
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

export function* watchInitiativeJoinRequest () {
  while (true) {
    const { id, resolve, reject } = yield take(INITIATIVE_JOIN_REQUEST)
    yield call(joinInitiative, id, resolve, reject)
  }
}

export function* watchInitiativeLeaveRequest () {
  while (true) {
    const { id, resolve, reject } = yield take(INITIATIVE_LEAVE_REQUEST)
    yield call(leaveInitiative, id, resolve, reject)
  }
}

export default function* () {
  yield fork(watchInitiativeCreateRequest)
  yield fork(watchInitiativeListReadRequest)
  yield fork(watchInitiativeDetailReadRequest)
  yield fork(watchInitiativeUpdateRequest)
  yield fork(watchInitiativeJoinRequest)
  yield fork(watchInitiativeLeaveRequest)
}
