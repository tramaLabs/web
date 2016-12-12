import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles INITIATIVE_LIST_READ_REQUEST', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_LIST_READ_REQUEST
  })).toEqual(initialState)
})

it('handles INITIATIVE_LIST_READ_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_LIST_READ_SUCCESS,
    result: [1, 2, 3]
  })).toEqual({
    ...initialState,
    ids: [1, 2, 3]
  })
})

it('handles INITIATIVE_DETAIL_READ_REQUEST', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_DETAIL_READ_REQUEST,
    id: 1
  })).toEqual({
    ...initialState,
    id: 1
  })
})

it('handles INITIATIVE_DETAIL_READ_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_DETAIL_READ_SUCCESS,
    result: 1
  })).toEqual({
    ...initialState,
    id: 1
  })
})
