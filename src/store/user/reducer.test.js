import { initialState } from './selectors'
import * as actions from './actions'
import { AUTH_LOGOUT } from '../auth/actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  currentId: 5
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles CURRENT_USER_READ_SUCCESS', () => {
  const action = { type: actions.CURRENT_USER_READ_SUCCESS, result: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, currentId: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, currentId: 1 })
})

it('handles AUTH_LOGOUT', () => {
  const action = { type: AUTH_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, currentId: initialState.currentId })
})
