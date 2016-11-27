import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles AUTH_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.AUTH_SUCCESS,
    token: 1
  })).toEqual({
    ...initialState,
    token: 1
  })
})

it('handles AUTH_LOGOUT', () => {
  expect(reducer({ ...initialState, token: 1 }, { type: actions.AUTH_LOGOUT })).toEqual({
    ...initialState,
    token: initialState.token
  })
})
