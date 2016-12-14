import { LOCATION_CHANGE } from 'react-router-redux'
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'
import { INITIATIVE_DETAIL_READ_SUCCESS, INITIATIVE_UPDATE_SUCCESS } from '../initiative/actions'

const altState = {
  ...initialState,
  id: 2,
  uploadProgress: 0.75,
  previewUrl: 'foo'
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles PHOTO_UPLOAD_REQUEST', () => {
  const action = { type: actions.PHOTO_UPLOAD_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...initialState, previewUrl: altState.previewUrl })
})

it('handles PHOTO_UPLOAD_FAILURE', () => {
  const action = { type: actions.PHOTO_UPLOAD_FAILURE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...initialState, previewUrl: altState.previewUrl })
})

it('handles PHOTO_UPLOAD_SUCCESS', () => {
  const action = { type: actions.PHOTO_UPLOAD_SUCCESS, result: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, id: 1 })
  expect(reducer(altState, action)).toEqual({ ...initialState, id: 1 })
})

it('handles PHOTO_UPLOAD_PROGRESS', () => {
  const action = { type: actions.PHOTO_UPLOAD_PROGRESS, progress: 0.5 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, uploadProgress: 0.5 })
  expect(reducer(altState, action)).toEqual({ ...altState, uploadProgress: 0.5 })
})

it('handles INITIATIVE_DETAIL_READ_SUCCESS', () => {
  const action = { type: INITIATIVE_DETAIL_READ_SUCCESS }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual(initialState)
})

it('handles INITIATIVE_UPDATE_SUCCESS', () => {
  const action = { type: INITIATIVE_UPDATE_SUCCESS }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual(initialState)
})

it('handles LOCATION_CHANGE', () => {
  const action = { type: LOCATION_CHANGE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual(initialState)
})

it('handles PHOTO_PREVIEW_REQUEST', () => {
  const action = { type: actions.PHOTO_PREVIEW_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, previewUrl: initialState.previewUrl })
})

it('handles PHOTO_PREVIEW_CANCEL', () => {
  const action = { type: actions.PHOTO_PREVIEW_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, previewUrl: initialState.previewUrl })
})

it('handles PHOTO_PREVIEW_SUCCESS', () => {
  const action = { type: actions.PHOTO_PREVIEW_SUCCESS, url: 'test' }
  expect(reducer(initialState, action)).toEqual({ ...initialState, previewUrl: 'test' })
  expect(reducer(altState, action)).toEqual({ ...altState, previewUrl: 'test' })
})
