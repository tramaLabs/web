import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { UserButton } from 'components'

const user = {
  name: 'Test User',
  picture: 'http://lorempixel.com/40/40/people'
}
const onUserLogout = action('logout')

storiesOf('UserButton', module)
  .add('default', () => (
    <UserButton onUserLogout={onUserLogout} />
  ))
  .add('reverse', () => (
    <UserButton onUserLogout={onUserLogout} reverse />
  ))
  .add('with user', () => (
    <UserButton onUserLogout={onUserLogout} user={user} />
  ))
  .add('with user reverse', () => (
    <UserButton onUserLogout={onUserLogout} user={user} reverse />
  ))
