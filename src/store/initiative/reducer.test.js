import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles INITIATIVE_LIST_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_LIST_SUCCESS,
    result: [1, 2, 3]
  })).toEqual({
    ...initialState,
    list: [1, 2, 3]
  })
})

it('handles INITIATIVE_RETRIEVE_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.INITIATIVE_RETRIEVE_SUCCESS,
    result: 1
  })).toEqual({
    ...initialState,
    item: 1
  })
})
