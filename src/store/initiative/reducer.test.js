import { LOCATION_CHANGE } from 'react-router-redux'
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  id: 5,
  ids: [6, 7, 8],
  photoUpdateProgress: 0.75,
  photoPreviewUrl: 'foo'
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles INITIATIVE_LIST_READ_REQUEST', () => {
  const action = { type: actions.INITIATIVE_LIST_READ_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, ids: initialState.ids })
})

it('handles INITIATIVE_LIST_READ_SUCCESS', () => {
  const action = { type: actions.INITIATIVE_LIST_READ_SUCCESS, result: [1, 2, 3] }
  expect(reducer(initialState, action)).toEqual({ ...initialState, ids: [1, 2, 3] })
  expect(reducer(altState, action)).toEqual({ ...altState, ids: [1, 2, 3] })
})

it('handles INITIATIVE_DETAIL_READ_REQUEST', () => {
  const action = { type: actions.INITIATIVE_DETAIL_READ_REQUEST, id: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, id: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, id: 1 })
})

it('handles INITIATIVE_DETAIL_READ_SUCCESS', () => {
  const action = { type: actions.INITIATIVE_DETAIL_READ_SUCCESS, result: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, id: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, id: 1 })
})

it('handles INITIATIVE_PHOTO_UPDATE_REQUEST', () => {
  const action = { type: actions.INITIATIVE_PHOTO_UPDATE_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoUpdateProgress: initialState.photoUpdateProgress
  })
})

it('handles INITIATIVE_PHOTO_UPDATE_FAILURE', () => {
  const action = { type: actions.INITIATIVE_PHOTO_UPDATE_FAILURE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoUpdateProgress: initialState.photoUpdateProgress
  })
})

it('handles INITIATIVE_PHOTO_UPDATE_SUCCESS', () => {
  const action = { type: actions.INITIATIVE_PHOTO_UPDATE_SUCCESS }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoUpdateProgress: initialState.photoUpdateProgress,
    photoPreviewUrl: initialState.photoPreviewUrl
  })
})

it('handles INITIATIVE_PHOTO_UPDATE_PROGRESS', () => {
  const action = { type: actions.INITIATIVE_PHOTO_UPDATE_PROGRESS, progress: 0.5 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, photoUpdateProgress: 0.5 })
  expect(reducer(altState, action)).toEqual({ ...altState, photoUpdateProgress: 0.5 })
})

it('handles LOCATION_CHANGE', () => {
  const action = { type: LOCATION_CHANGE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoUpdateProgress: initialState.photoUpdateProgress,
    photoPreviewUrl: initialState.photoPreviewUrl
  })
})

it('handles INITIATIVE_PHOTO_PREVIEW_REQUEST', () => {
  const action = { type: actions.INITIATIVE_PHOTO_PREVIEW_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoPreviewUrl: initialState.photoPreviewUrl
  })
})

it('handles INITIATIVE_PHOTO_PREVIEW_FAILURE', () => {
  const action = { type: actions.INITIATIVE_PHOTO_PREVIEW_FAILURE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoPreviewUrl: initialState.photoPreviewUrl
  })
})

it('handles INITIATIVE_PHOTO_PREVIEW_CANCEL', () => {
  const action = { type: actions.INITIATIVE_PHOTO_PREVIEW_CANCEL }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    photoPreviewUrl: initialState.photoPreviewUrl
  })
})

it('handles INITIATIVE_PHOTO_PREVIEW_SUCCESS', () => {
  const action = { type: actions.INITIATIVE_PHOTO_PREVIEW_SUCCESS, url: 'test' }
  expect(reducer(initialState, action)).toEqual({ ...initialState, photoPreviewUrl: 'test' })
  expect(reducer(altState, action)).toEqual({ ...altState, photoPreviewUrl: 'test' })
})
