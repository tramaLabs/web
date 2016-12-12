import { normalize } from 'normalizr'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'
import photo from './schema'

const resolve = jest.fn()
const reject = jest.fn()
const error = { response: 'test' }

beforeEach(() => {
  jest.resetAllMocks()
})

describe('uploadPhoto', () => {
  const data = { id: 1 }
  const [ upload, channel ] = sagas.createUploader()

  it('calls success and resolve', () => {
    const generator = sagas.uploadPhoto(data, resolve)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([ upload, channel ]).value)
      .toEqual(fork(sagas.watchPhotoUploadProgress, channel))
    expect(generator.next().value).toEqual(call(upload, '/photos', data))
    expect(resolve).not.toBeCalled()
    expect(generator.next({ data }).value)
      .toEqual(put(actions.photoUpload.success(normalize(data, photo))))
    expect(resolve).toHaveBeenCalledWith(data)
  })

  it('calls failure and reject', () => {
    const generator = sagas.uploadPhoto(data, undefined, reject)
    expect(generator.next().value).toEqual(call(sagas.createUploader))
    expect(generator.next([ upload, channel ]).value)
      .toEqual(fork(sagas.watchPhotoUploadProgress, channel))
    expect(reject).not.toBeCalled()
    expect(generator.throw(error).value).toEqual(put(actions.photoUpload.failure('test')))
    expect(reject).toHaveBeenCalledWith('test')
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

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchPhotoUploadRequest))
})
