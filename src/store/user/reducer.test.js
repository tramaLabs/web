import { initialState } from './selectors'
import * as actions from './actions'
import { AUTH_LOGOUT } from '../auth/actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  currentDetail: 5
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles CURRENT_USER_READ_SUCCESS', () => {
  const action = { type: actions.CURRENT_USER_READ_SUCCESS, detail: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, currentDetail: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, currentDetail: 1 })
})

it('handles AUTH_LOGOUT', () => {
  const action = { type: AUTH_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({
    ...altState,
    currentDetail: initialState.currentDetail
  })
})
