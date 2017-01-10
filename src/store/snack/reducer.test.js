import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  message: 'test message',
  color: 'test color',
  show: true
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles SNACK_SHOW', () => {
  const action = {
    type: actions.SNACK_SHOW,
    message: 'foo',
    color: 'bar'
  }
  const state = {
    ...initialState,
    message: 'foo',
    color: 'bar',
    show: true
  }
  expect(reducer(initialState, action)).toEqual(state)
  expect(reducer(altState, action)).toEqual({ ...altState, ...state })
})

it('handles SNACK_HIDE', () => {
  const action = { type: actions.SNACK_HIDE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, show: false })
})
