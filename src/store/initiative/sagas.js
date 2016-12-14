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
import { snackShow } from '../snack/actions'
import initiative from './schema'
import api from 'services/api'

export function* createInitiative (newData) {
  try {
    const { data } = yield call(api.post, '/initiatives', newData)
    yield put(initiativeCreate.success({ ...normalize(data, initiative), data }))
    yield put(snackShow('Iniciativa aberta! Bora tramar!', 'success'))
  } catch (error) {
    yield put(initiativeCreate.failure(error))
    yield put(snackShow('Ops! Não foi possível criar a iniciativa.', 'danger'))
  }
}

export function* readInitiativeList (params) {
  try {
    const { data } = yield call(api.get, '/initiatives', { params })
    yield put(initiativeListRead.success({ ...normalize(data, arrayOf(initiative)), data }))
  } catch (error) {
    yield put(initiativeListRead.failure(error))
  }
}

export function* readInitiativeDetail (id) {
  try {
    const { data } = yield call(api.get, `/initiatives/${id}`)
    yield put(initiativeDetailRead.success({ ...normalize(data, initiative), data }))
  } catch (error) {
    yield put(initiativeDetailRead.failure(error))
  }
}

export function* updateInitiative (id, newData) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}`, newData)
    yield put(initiativeUpdate.success({ ...normalize(data, initiative), data }))
    yield put(snackShow('Iniciativa atualizadíssima!', 'success'))
  } catch (error) {
    yield put(initiativeUpdate.failure(error))
    yield put(snackShow('Ops! Não foi possível atualizar a iniciativa.', 'danger'))
  }
}

export function* joinInitiative (id) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/join`)
    yield put(initiativeJoin.success({ ...normalize(data, initiative), data }))
    yield put(snackShow('Boa! Agora você está participando da iniciativa!', 'success'))
  } catch (error) {
    yield put(initiativeJoin.failure(error))
    yield put(snackShow('Ops! Não foi possível participar da iniciativa.', 'danger'))
  }
}

export function* leaveInitiative (id) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/leave`)
    yield put(initiativeLeave.success({ ...normalize(data, initiative), data }))
    yield put(snackShow('Você deixou a iniciativa.', 'success'))
  } catch (error) {
    yield put(initiativeLeave.failure(error))
    yield put(snackShow('Ops! Não foi possível deixar a iniciativa.', 'danger'))
  }
}

export function* watchInitiativeCreateRequest () {
  while (true) {
    const { data } = yield take(INITIATIVE_CREATE_REQUEST)
    yield call(createInitiative, data)
  }
}

export function* watchInitiativeListReadRequest () {
  while (true) {
    const { params } = yield take(INITIATIVE_LIST_READ_REQUEST)
    yield call(readInitiativeList, params)
  }
}

export function* watchInitiativeDetailReadRequest () {
  while (true) {
    const { id } = yield take(INITIATIVE_DETAIL_READ_REQUEST)
    yield call(readInitiativeDetail, id)
  }
}

export function* watchInitiativeUpdateRequest () {
  while (true) {
    const { id, data } = yield take(INITIATIVE_UPDATE_REQUEST)
    yield call(updateInitiative, id, data)
  }
}

export function* watchInitiativeJoinRequest () {
  while (true) {
    const { id } = yield take(INITIATIVE_JOIN_REQUEST)
    yield call(joinInitiative, id)
  }
}

export function* watchInitiativeLeaveRequest () {
  while (true) {
    const { id } = yield take(INITIATIVE_LEAVE_REQUEST)
    yield call(leaveInitiative, id)
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
