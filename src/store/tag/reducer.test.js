import { LOCATION_CHANGE } from 'react-router-redux'
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  detail: 5,
  list: [6, 7, 8]
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles LOCATION_CHANGE', () => {
  const action = { type: LOCATION_CHANGE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, list: initialState.list })
})

it('handles TAG_LIST_EXTRACT_SUCCESS', () => {
  const action = { type: actions.TAG_LIST_EXTRACT_SUCCESS, list: [1, 2, 3] }
  expect(reducer(initialState, action)).toEqual({ ...initialState, list: [1, 2, 3] })
  expect(reducer(altState, action)).toEqual({ ...altState, list: [1, 2, 3] })
})
