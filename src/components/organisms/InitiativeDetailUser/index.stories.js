import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailUser } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user1'
  }
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user2'
  }
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
