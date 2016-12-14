import { arrayOf, normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import { tagCreate, tagListRead, TAG_CREATE_REQUEST, TAG_LIST_READ_REQUEST } from './actions'
import tag from './schema'
import api from 'services/api'

export function* createTag (newData) {
  try {
    const { data } = yield call(api.post, '/tags', newData)
    yield put(tagCreate.success({ ...normalize(data, tag), data }))
  } catch (error) {
    yield put(tagCreate.failure(error))
  }
}

export function* readTagList (params) {
  try {
    const { data } = yield call(api.get, '/tags', { params })
    yield put(tagListRead.success({ ...normalize(data, arrayOf(tag)), data }))
  } catch (error) {
    yield put(tagListRead.failure(error))
  }
}

export function* watchTagCreateRequest () {
  while (true) {
    const { data } = yield take(TAG_CREATE_REQUEST)
    yield call(createTag, data)
  }
}

export function* watchTagListReadRequest () {
  while (true) {
    const { params } = yield take(TAG_LIST_READ_REQUEST)
    yield call(readTagList, params)
  }
}

export default function* () {
  yield fork(watchTagCreateRequest)
  yield fork(watchTagListReadRequest)
}
