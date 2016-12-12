import { normalize } from 'normalizr'
import { eventChannel, END } from 'redux-saga'
import { take, put, call, fork } from 'redux-saga/effects'
import { photoUpload, PHOTO_UPLOAD_REQUEST } from './actions'
import photo from './schema'
import api from 'services/api'

// istanbul ignore next
const noop = () => {}

export const createUploader = () => {
  let emit
  const channel = eventChannel((emitter) => {
    emit = emitter
    return noop
  })
  // istanbul ignore next
  const upload = (url, file) => api.upload(url, file, (e) => {
    const percent = e.loaded / e.total
    emit(percent < 1 ? percent : END)
  })

  return [ upload, channel ]
}

export function* uploadPhoto (file, resolve = noop, reject = noop) {
  try {
    const [ upload, channel ] = yield call(createUploader)
    yield fork(watchPhotoUploadProgress, channel)
    const { data } = yield call(upload, '/photos', file)
    resolve(data)
    yield put(photoUpload.success(normalize(data, photo)))
  } catch ({ response }) {
    reject(response)
    yield put(photoUpload.failure(response))
  }
}

export function* watchPhotoUploadRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(PHOTO_UPLOAD_REQUEST)
    yield call(uploadPhoto, data, resolve, reject)
  }
}

export function* watchPhotoUploadProgress (channel) {
  while (true) {
    const progress = yield take(channel)
    yield put(photoUpload.progress(progress))
  }
}

export default function* () {
  yield fork(watchPhotoUploadRequest)
}
