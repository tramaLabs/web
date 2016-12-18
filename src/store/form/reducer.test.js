import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  csrfToken: 'foo'
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles FORM_SET_CSRF_TOKEN', () => {
  const action = { type: actions.FORM_SET_CSRF_TOKEN, token: 'test' }
  expect(reducer(initialState, action)).toEqual({ ...initialState, csrfToken: 'test' })
  expect(reducer(altState, action)).toEqual({ ...altState, csrfToken: 'test' })
})
