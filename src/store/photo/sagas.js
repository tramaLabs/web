import { normalize } from 'normalizr'
import { eventChannel, END } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import { photoUpload, photoPreview, PHOTO_UPLOAD_REQUEST, PHOTO_PREVIEW_REQUEST } from './actions'
import { initiativeUpdate } from '../initiative/actions'
import { fromInitiative } from '../selectors'
import photo from './schema'
import api from 'services/api'

// istanbul ignore next
const noop = () => {}

export const createUploader = () => {
  let emit
  const chan = eventChannel((emitter) => {
    emit = emitter
    return noop
  })
  // istanbul ignore next
  const upload = (url, file) => api.upload(url, file, (e) => {
    const percent = e.loaded / e.total
    emit(percent < 1 ? percent : END)
  })

  return [ upload, chan ]
}

export function* uploadPhoto (file, resolve = noop, reject = noop) {
  try {
    const [ upload, chan ] = yield call(createUploader)
    yield fork(watchPhotoUploadProgress, chan)
    const { data } = yield call(upload, '/photos', file)
    yield put(photoUpload.success(normalize(data, photo)))
    const initiativeId = yield select(fromInitiative.getId)
    yield put(initiativeUpdate.request(initiativeId, { photo: data.id }, resolve))
  } catch (error) {
    yield put(photoUpload.failure(error.data))
    reject(error)
  }
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

export function* previewPhoto (file) {
  const chan = yield call(createPreviewer, file)
  try {
    while (true) {
      const url = yield take(chan)
      yield put(photoPreview.success(url))
    }
  } catch (e) {
    yield put(photoPreview.cancel())
  }
}

export function* watchPhotoUploadRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(PHOTO_UPLOAD_REQUEST)
    yield call(uploadPhoto, data, resolve, reject)
  }
}

export function* watchPhotoUploadProgress (chan) {
  while (true) {
    const progress = yield take(chan)
    yield put(photoUpload.progress(progress))
  }
}

export function* watchPhotoPreviewRequest () {
  while (true) {
    const { data } = yield take(PHOTO_PREVIEW_REQUEST)
    yield call(previewPhoto, data)
  }
}

export default function* () {
  yield fork(watchPhotoUploadRequest)
  yield fork(watchPhotoPreviewRequest)
}
