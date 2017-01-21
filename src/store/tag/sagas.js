import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import {
  tagCreate,
  tagListRead,
  tagListExtract,
  TAG_CREATE_REQUEST,
  TAG_LIST_READ_REQUEST,
  TAG_LIST_EXTRACT_REQUEST
} from './actions'

export function* createTag(newData) {
  try {
    const { data } = yield call(api.post, '/tags', newData)
    yield put(tagCreate.success(data))
  } catch (error) {
    yield put(tagCreate.failure(error))
  }
}

export function* readTagList(params) {
  try {
    const { data } = yield call(api.get, '/tags', { params })
    yield put(tagListRead.success(data))
  } catch (error) {
    yield put(tagListRead.failure(error))
  }
}

export function* extractTagList(text) {
  try {
    const { data } = yield call(api.post, '/tags/extract', { text })
    yield put(tagListExtract.success(data))
  } catch (error) {
    yield put(tagListExtract.failure(error))
  }
}

export function* watchTagCreateRequest() {
  while (true) {
    const { data } = yield take(TAG_CREATE_REQUEST)
    yield call(createTag, data)
  }
}

export function* watchTagListReadRequest() {
  while (true) {
    const { params } = yield take(TAG_LIST_READ_REQUEST)
    yield call(readTagList, params)
  }
}

export function* watchTagListExtractRequest() {
  while (true) {
    const { text } = yield take(TAG_LIST_EXTRACT_REQUEST)
    yield call(extractTagList, text)
  }
}

export default function* () {
  yield fork(watchTagCreateRequest)
  yield fork(watchTagListReadRequest)
  yield fork(watchTagListExtractRequest)
}
