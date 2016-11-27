import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles AUTH_FACEBOOK_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.AUTH_FACEBOOK_SUCCESS,
    token: 1
  })).toEqual({
    ...initialState,
    token: 1
  })
})
