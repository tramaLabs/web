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

it('handles TAG_LIST_READ_REQUEST', () => {
  const action = { type: actions.TAG_LIST_READ_REQUEST }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, ids: initialState.ids })
})

it('handles TAG_LIST_READ_SUCCESS', () => {
  const action = { type: actions.TAG_LIST_READ_SUCCESS, result: [1, 2, 3] }
  expect(reducer(initialState, action)).toEqual({ ...initialState, ids: [1, 2, 3] })
  expect(reducer(altState, action)).toEqual({ ...altState, ids: [1, 2, 3] })
})
