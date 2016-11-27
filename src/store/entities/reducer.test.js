import { initialState } from './selectors'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('should handle actions', function () {
  const entities = { initiatives: { 1: { id: 1 }, 2: { id: 2 } } }
  expect(reducer({}, { entities }))
    .toEqual({
      initiatives: { 1: { id: 1 }, 2: { id: 2 } }
    })
})
