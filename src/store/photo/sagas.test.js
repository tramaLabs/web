import { normalize } from 'normalizr'
import { take, put, call, fork, select } from 'redux-saga/effects'
import { initiativeUpdate } from '../initiative/actions'
import { fromInitiative } from '../selectors'
import * as actions from './actions'
import saga, * as sagas from './sagas'
import photo from './schema'

const resolve = jest.fn()
const reject = jest.fn()
const error = { data: 'test' }

beforeEach(() => {
  jest.resetAllMocks()
})

describe('uploadPhoto', () => {
  const data = { id: 1 }
  const [ upload, chan ] = sagas.createUploader()

  it('calls success', () => {
    const generator = sagas.uploadPhoto(data, resolve)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([ upload, chan ]).value)
      .toEqual(fork(sagas.watchPhotoUploadProgress, chan))
    expect(generator.next().value).toEqual(call(upload, '/photos', data))
    expect(generator.next({ data }).value)
      .toEqual(put(actions.photoUpload.success(normalize(data, photo))))
    expect(generator.next().value).toEqual(select(fromInitiative.getId))
    expect(generator.next(1).value)
      .toEqual(put(initiativeUpdate.request(1, { photo: data.id }, resolve)))
  })

  it('calls failure and reject', () => {
    const generator = sagas.uploadPhoto(data, undefined, reject)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([ upload, chan ]).value)
      .toEqual(fork(sagas.watchPhotoUploadProgress, chan))
    expect(generator.throw(error).value)
      .toEqual(put(actions.photoUpload.failure('test')))
    expect(reject).not.toBeCalled()
    generator.next()
    expect(reject).toHaveBeenCalledWith(error)
  })
})

describe('previewPhoto', () => {
  const data = new File(['test'], 'test.jpg')
  const chan = sagas.createPreviewer(data)

  it('calls success', () => {
    const generator = sagas.previewPhoto(data)
    expect(generator.next().value).toEqual(call(sagas.createPreviewer, data))
    expect(generator.next(chan).value).toEqual(take(chan))
    expect(generator.next('url').value).toEqual(put(actions.photoPreview.success('url')))
  })

  it('calls cancel', () => {
    const generator = sagas.previewPhoto(data)
    expect(generator.next().value).toEqual(call(sagas.createPreviewer, data))
    expect(generator.next(chan).value).toEqual(take(chan))
    expect(generator.throw().value).toEqual(put(actions.photoPreview.cancel()))
  })
})

test('watchPhotoUploadRequest', () => {
  const payload = { data: 1, resolve, reject }
  const generator = sagas.watchPhotoUploadRequest()
  expect(generator.next().value).toEqual(take(actions.PHOTO_UPLOAD_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.uploadPhoto, ...Object.values(payload)))
})

test('watchPhotoUploadProgress', () => {
  const generator = sagas.watchPhotoUploadProgress('test')
  expect(generator.next().value).toEqual(take('test'))
  expect(generator.next(0.5).value).toEqual(put(actions.photoUpload.progress(0.5)))
})

test('watchPhotoPreviewRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchPhotoPreviewRequest()
  expect(generator.next().value).toEqual(take(actions.PHOTO_PREVIEW_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.previewPhoto, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchPhotoUploadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchPhotoPreviewRequest))
})
