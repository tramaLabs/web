import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  token: 5
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles AUTH_LOGIN_SUCCESS', () => {
  const action = { type: actions.AUTH_LOGIN_SUCCESS, token: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, token: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, token: 1 })
})

it('handles AUTH_LOGOUT', () => {
  const action = { type: actions.AUTH_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, token: initialState.token })
})
