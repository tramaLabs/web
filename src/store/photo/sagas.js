import { normalize } from 'normalizr'
import { eventChannel, END } from 'redux-saga'
import { take, put, call, fork, select } from 'redux-saga/effects'
import { photoUpload, photoPreview, PHOTO_UPLOAD_REQUEST, PHOTO_PREVIEW_REQUEST } from './actions'
import { initiativeUpdate } from '../initiative/actions'
import { snackShow } from '../snack/actions'
import { fromInitiative } from '../selectors'
import photo from './schema'
import api from 'services/api'

const maxMegaBytes = 2
const maxFileSize = maxMegaBytes * Math.pow(1024, 2)

export const createUploader = () => {
  let emit
  const chan = eventChannel((emitter) => {
    emit = emitter
    // istanbul ignore next
    return () => {}
  })
  // istanbul ignore next
  const upload = (url, file) => api.upload(url, file, (e) => {
    const percent = e.loaded / e.total
    emit(percent < 1 ? percent : END)
  })

  return [ upload, chan ]
}

export function* uploadPhoto (file) {
  const initiativeId = yield select(fromInitiative.getId)
  if (!initiativeId) {
    yield put(photoUpload.failure())
    yield put(photoPreview.cancel())
    return
  }

  try {
    const [ upload, chan ] = yield call(createUploader)
    yield fork(watchPhotoUploadProgress, chan)
    const { data } = yield call(upload, '/photos', file)
    yield put(photoUpload.success({ ...normalize(data, photo), data }))
    yield put(initiativeUpdate.request(initiativeId, { photo: data.id }))
  } catch (error) {
    yield put(photoUpload.failure(error))
    yield put(photoPreview.cancel())
    yield put(snackShow('Ops! Não foi possível enviar a foto.', 'danger'))
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
  if (file.size > maxFileSize) {
    yield put(photoPreview.failure())
    yield put(snackShow(
      `Ops! Arquivo muito pesado. Tente não ultrapassar ${maxMegaBytes}MB.`,
      'danger'
    ))
    return
  }
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
    const { data } = yield take(PHOTO_UPLOAD_REQUEST)
    yield call(uploadPhoto, data)
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
