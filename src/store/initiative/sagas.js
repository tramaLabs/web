import { push } from 'react-router-redux'
import { eventChannel, END } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import api from 'services/api'
import {
  initiativeCreate,
  initiativeListRead,
  initiativeDetailRead,
  initiativeUpdate,
  initiativeJoin,
  initiativeLeave,
  initiativePhotoUpdate,
  initiativePhotoPreview,
  INITIATIVE_CREATE_REQUEST,
  INITIATIVE_LIST_READ_REQUEST,
  INITIATIVE_DETAIL_READ_REQUEST,
  INITIATIVE_UPDATE_REQUEST,
  INITIATIVE_JOIN_REQUEST,
  INITIATIVE_LEAVE_REQUEST,
  INITIATIVE_PHOTO_UPDATE_REQUEST,
  INITIATIVE_PHOTO_PREVIEW_REQUEST
} from '../actions'
import { extractTagList } from '../tag/sagas'
import { fromTag } from '../selectors'

const maxMegaBytes = 2
const maxFileSize = maxMegaBytes * (1024 ** 2)

export const createUploader = () => {
  let emit
  const chan = eventChannel((emitter) => {
    emit = emitter
    // istanbul ignore next
    return () => {}
  })
  // istanbul ignore next
  const upload = (url, file) => {
    const data = new FormData()
    data.append('data', file, file.name)
    const onUploadProgress = (e) => {
      const percent = e.loaded / e.total
      emit(percent < 1 ? percent : END)
    }
    return api.put(url, data, { onUploadProgress })
  }

  return [upload, chan]
}

export const createPreviewer = (file) => eventChannel(
  // istanbul ignore next
  (emit) => {
    if (!window.FileReader) emit(END)
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      emit(reader.result)
      emit(END)
    }

    return () => reader.abort()
  }
)

export function* createInitiative(newData) {
  try {
    yield call(extractTagList, `${newData.title}\n\n${newData.description}`)
    const tags = yield select(fromTag.getList)
    const { data } = yield call(api.post, '/initiatives', { ...newData, tags })
    yield put(initiativeCreate.success(data))
    yield put(push(`/iniciativas/${data.id}/${data.slug}`))
  } catch (error) {
    yield put(initiativeCreate.failure(error))
  }
}

export function* readInitiativeList(params) {
  try {
    const { data } = yield call(api.get, '/initiatives', { params })
    yield put(initiativeListRead.success(data))
  } catch (error) {
    yield put(initiativeListRead.failure(error))
  }
}

export function* readInitiativeDetail(id) {
  try {
    const { data } = yield call(api.get, `/initiatives/${id}`)
    yield put(initiativeDetailRead.success(data))
  } catch (error) {
    yield put(initiativeDetailRead.failure(error))
  }
}

export function* updateInitiative(id, newData) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}`, newData)
    yield put(initiativeUpdate.success(data))
  } catch (error) {
    yield put(initiativeUpdate.failure(error))
  }
}

export function* joinInitiative(id) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/join`)
    yield put(initiativeJoin.success(data))
  } catch (error) {
    yield put(initiativeJoin.failure(error))
  }
}

export function* leaveInitiative(id) {
  try {
    const { data } = yield call(api.put, `/initiatives/${id}/leave`)
    yield put(initiativeLeave.success(data))
  } catch (error) {
    yield put(initiativeLeave.failure(error))
  }
}

export function* watchInitiativePhotoUpdateProgress(chan) {
  while (true) {
    const progress = yield take(chan)
    yield put(initiativePhotoUpdate.progress(progress))
  }
}

export function* updatePhotoInitiative(id, file) {
  try {
    const [upload, chan] = yield call(createUploader)
    yield fork(watchInitiativePhotoUpdateProgress, chan)
    const { data } = yield call(upload, `/initiatives/${id}/photo`, file)
    yield put(initiativePhotoUpdate.success(data))
  } catch (error) {
    yield put(initiativePhotoUpdate.failure(error))
    yield put(initiativePhotoPreview.cancel())
  }
}

export function* previewPhotoInitiative(file) {
  if (file.size > maxFileSize) {
    yield put(initiativePhotoPreview.failure())
    return
  }
  const chan = yield call(createPreviewer, file)
  try {
    while (true) {
      const url = yield take(chan)
      yield put(initiativePhotoPreview.success(url))
    }
  } catch (e) {
    yield put(initiativePhotoPreview.cancel())
  }
}

export function* watchInitiativeCreateRequest() {
  while (true) {
    const { data } = yield take(INITIATIVE_CREATE_REQUEST)
    yield call(createInitiative, data)
  }
}

export function* watchInitiativeListReadRequest() {
  while (true) {
    const { params } = yield take(INITIATIVE_LIST_READ_REQUEST)
    yield call(readInitiativeList, params)
  }
}

export function* watchInitiativeDetailReadRequest() {
  while (true) {
    const { id } = yield take(INITIATIVE_DETAIL_READ_REQUEST)
    yield call(readInitiativeDetail, id)
  }
}

export function* watchInitiativeUpdateRequest() {
  while (true) {
    const { id, data } = yield take(INITIATIVE_UPDATE_REQUEST)
    yield call(updateInitiative, id, data)
  }
}

export function* watchInitiativeJoinRequest() {
  while (true) {
    const { id } = yield take(INITIATIVE_JOIN_REQUEST)
    yield call(joinInitiative, id)
  }
}

export function* watchInitiativeLeaveRequest() {
  while (true) {
    const { id } = yield take(INITIATIVE_LEAVE_REQUEST)
    yield call(leaveInitiative, id)
  }
}

export function* watchInitiativePhotoUpdateRequest() {
  while (true) {
    const { id, data } = yield take(INITIATIVE_PHOTO_UPDATE_REQUEST)
    yield call(updatePhotoInitiative, id, data)
  }
}

export function* watchInitiativePhotoPreviewRequest() {
  while (true) {
    const { data } = yield take(INITIATIVE_PHOTO_PREVIEW_REQUEST)
    yield call(previewPhotoInitiative, data)
  }
}

export default function* () {
  yield fork(watchInitiativeCreateRequest)
  yield fork(watchInitiativeListReadRequest)
  yield fork(watchInitiativeDetailReadRequest)
  yield fork(watchInitiativeUpdateRequest)
  yield fork(watchInitiativeJoinRequest)
  yield fork(watchInitiativeLeaveRequest)
  yield fork(watchInitiativePhotoUpdateRequest)
  yield fork(watchInitiativePhotoPreviewRequest)
}
