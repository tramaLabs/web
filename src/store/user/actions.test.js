import * as actions from './actions'

test('currentUserRetrieve', () => {
  expect(actions.currentUserRetrieve.request()).toEqual({
    type: actions.CURRENT_USER_RETRIEVE_REQUEST
  })

  expect(actions.currentUserRetrieve.success({ result: 1 })).toEqual({
    type: actions.CURRENT_USER_RETRIEVE_SUCCESS,
    result: 1
  })

  expect(actions.currentUserRetrieve.failure('test')).toEqual({
    type: actions.CURRENT_USER_RETRIEVE_FAILURE,
    error: 'test'
  })
})
