import * as actions from './actions'

test('auth', () => {
  expect(actions.auth.success(3)).toEqual({
    type: actions.AUTH_SUCCESS,
    token: 3
  })

  expect(actions.auth.failure('test')).toEqual({
    type: actions.AUTH_FAILURE,
    error: 'test'
  })
})

test('authFacebook', () => {
  expect(actions.authFacebook.request(3)).toEqual({
    type: actions.AUTH_REQUEST,
    service: 'facebook',
    accessToken: 3
  })
})

test('authLogout', () => {
  expect(actions.authLogout()).toEqual({ type: actions.AUTH_LOGOUT })
})
