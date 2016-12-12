import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles PHOTO_UPLOAD_REQUEST', () => {
  expect(reducer(initialState, {
    type: actions.PHOTO_UPLOAD_REQUEST
  })).toEqual(initialState)

  expect(reducer({
    ...initialState,
    progress: 1
  }, {
    type: actions.PHOTO_UPLOAD_REQUEST
  })).toEqual(initialState)
})

it('handles PHOTO_UPLOAD_PROGRESS', () => {
  expect(reducer(initialState, {
    type: actions.PHOTO_UPLOAD_PROGRESS,
    progress: 0.5
  })).toEqual({
    ...initialState,
    progress: 0.5
  })
})
