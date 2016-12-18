import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  id: 5,
  ids: [6, 7, 8]
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
