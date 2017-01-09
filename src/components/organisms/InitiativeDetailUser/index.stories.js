import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailUser } from 'components'

const users = [{
  id: 1,
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 2,
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people'
}]

const initiative = {
  user: users[0],
  users
}

storiesOf('InitiativeDetailUser', module)
  .add('default', () => (
    <InitiativeDetailUser initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeDetailUser initiative={initiative} reverse />
  ))
