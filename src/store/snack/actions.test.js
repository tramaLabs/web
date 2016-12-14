import * as actions from './actions'

test('snackShow', () => {
  expect(actions.snackShow('test', 'primary')).toEqual({
    type: actions.SNACK_SHOW,
    message: 'test',
    kind: 'primary'
  })
})

test('snackHide', () => {
  expect(actions.snackHide()).toEqual({
    type: actions.SNACK_HIDE
  })
})
