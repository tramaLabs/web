import * as actions from './actions'

test('currentUserRead', () => {
  expect(actions.currentUserRead.request()).toEqual({
    type: actions.CURRENT_USER_READ_REQUEST
  })

  expect(actions.currentUserRead.success({ result: 1 })).toEqual({
    type: actions.CURRENT_USER_READ_SUCCESS,
    result: 1
  })

  expect(actions.currentUserRead.failure('test')).toEqual({
    type: actions.CURRENT_USER_READ_FAILURE,
    error: 'test'
  })
})
