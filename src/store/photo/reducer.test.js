import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

const expectStateToBeReseted = (type) => {
  expect(reducer(initialState, { type })).toEqual(initialState)
  expect(reducer({ ...initialState, uploadProgress: 1 }, { type })).toEqual(initialState)
  expect(reducer({ ...initialState, previewUrl: 1 }, { type })).toEqual(initialState)
}

it('handles PHOTO_UPLOAD_REQUEST', () => {
  expectStateToBeReseted(actions.PHOTO_UPLOAD_REQUEST)
})

it('handles PHOTO_UPLOAD_SUCCESS', () => {
  expectStateToBeReseted(actions.PHOTO_UPLOAD_SUCCESS)
})

it('handles PHOTO_UPLOAD_FAILURE', () => {
  expectStateToBeReseted(actions.PHOTO_UPLOAD_FAILURE)
})

it('handles PHOTO_UPLOAD_PROGRESS', () => {
  expect(reducer(initialState, {
    type: actions.PHOTO_UPLOAD_PROGRESS,
    progress: 0.5
  })).toEqual({
    ...initialState,
    uploadProgress: 0.5
  })
})

const expectPreviewUrlToBeReseted = (type) => {
  expect(reducer(initialState, { type })).toEqual(initialState)
  expect(reducer({ ...initialState, uploadProgress: 1 }, { type })).toEqual({
    ...initialState,
    uploadProgress: 1
  })
  expect(reducer({ ...initialState, previewUrl: 1 }, { type })).toEqual(initialState)
}

it('handles PHOTO_PREVIEW_REQUEST', () => {
  expectPreviewUrlToBeReseted(actions.PHOTO_PREVIEW_REQUEST)
})

it('handles PHOTO_PREVIEW_CANCEL', () => {
  expectPreviewUrlToBeReseted(actions.PHOTO_PREVIEW_CANCEL)
})

it('handles PHOTO_PREVIEW_SUCCESS', () => {
  const action = {
    type: actions.PHOTO_PREVIEW_SUCCESS,
    url: 'test'
  }

  expect(reducer(initialState, action)).toEqual({
    ...initialState,
    previewUrl: 'test'
  })
})
