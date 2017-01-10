import * as actions from './actions'

test('currentUserRead', () => {
  expect(actions.currentUserRead.request()).toEqual({
    type: actions.CURRENT_USER_READ_REQUEST
  })

  expect(actions.currentUserRead.success(1)).toEqual({
    type: actions.CURRENT_USER_READ_SUCCESS,
    detail: 1
  })

  expect(actions.currentUserRead.failure('test')).toEqual({
    type: actions.CURRENT_USER_READ_FAILURE,
    error: 'test'
  })
})
