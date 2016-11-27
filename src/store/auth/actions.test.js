import * as actions from './actions'

test('authFacebook', () => {
  expect(actions.authFacebook.request(3)).toEqual({
    type: actions.AUTH_FACEBOOK_REQUEST,
    fbToken: 3
  })

  expect(actions.authFacebook.success(3)).toEqual({
    type: actions.AUTH_FACEBOOK_SUCCESS,
    token: 3
  })

  expect(actions.authFacebook.failure('test')).toEqual({
    type: actions.AUTH_FACEBOOK_FAILURE,
    error: 'test'
  })
})
