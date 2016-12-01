import { initialState } from './selectors'
import * as actions from './actions'
import { AUTH_LOGOUT } from '../auth/actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles CURRENT_USER_READ_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.CURRENT_USER_READ_SUCCESS,
    result: 1
  })).toEqual({
    ...initialState,
    currentId: 1
  })
})

it('handles AUTH_LOGOUT', () => {
  expect(reducer({
    ...initialState,
    currentId: 1
  }, {
    type: AUTH_LOGOUT
  })).toEqual(initialState)
})
