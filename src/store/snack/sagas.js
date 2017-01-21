import { delay } from 'redux-saga'
import { takeEvery, take, put, call, fork } from 'redux-saga/effects'
import { snackShow, snackHide, SNACK_SHOW } from './actions'
import * as a from '../actions'

export const snacks = {
  [a.AUTH_LOGIN_SUCCESS]: ['Seja bem-vindo', 'success'],
  [a.AUTH_LOGIN_FAILURE]: ['Não foi possível conectar', 'danger'],
  [a.AUTH_LOGOUT]: ['Desconectado', 'grayscale'],
  [a.INITIATIVE_CREATE_SUCCESS]: ['Iniciativa aberta', 'success'],
  [a.INITIATIVE_CREATE_FAILURE]: ['Não foi possível criar a iniciativa', 'danger'],
  [a.INITIATIVE_UPDATE_SUCCESS]: ['Iniciativa atualizada', 'success'],
  [a.INITIATIVE_UPDATE_FAILURE]: ['Não foi possível atualizar a iniciativa', 'danger'],
  [a.INITIATIVE_JOIN_SUCCESS]: ['Agora você está participando da iniciativa', 'success'],
  [a.INITIATIVE_JOIN_FAILURE]: ['Não foi possível participar da iniciativa', 'danger'],
  [a.INITIATIVE_LEAVE_SUCCESS]: ['Você deixou a iniciativa', 'success'],
  [a.INITIATIVE_LEAVE_FAILURE]: ['Não foi possível deixar a iniciativa', 'danger'],
  [a.INITIATIVE_PHOTO_UPDATE_SUCCESS]: ['Foto de capa atualizada', 'success'],
  [a.INITIATIVE_PHOTO_UPDATE_FAILURE]: ['Não foi possível enviar a foto', 'danger'],
  [a.INITIATIVE_PHOTO_PREVIEW_FAILURE]: ['O arquivo não pode ultrapassar 2MB', 'danger']
}

export function* putSnack(action) {
  yield put(snackShow(snacks[action][0], snacks[action][1]))
}

export function* showSnacks() {
  yield Object.keys(snacks).map((action) => takeEvery(action, putSnack, action))
}

const millisecondsPerChar = 150

export function* showSnack(message) {
  const time = message.replace(/\s/g, '').length * millisecondsPerChar
  yield call(delay, time)
  yield put(snackHide())
}

export function* watchSnackShow() {
  while (true) {
    const { message } = yield take(SNACK_SHOW)
    yield call(showSnack, message)
  }
}

export default function* () {
  yield fork(showSnacks)
  yield fork(watchSnackShow)
}
