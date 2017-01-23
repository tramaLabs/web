import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeUserList } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people'
}]

const initiative = {
  users: users.concat(users, users, users, users)
}

storiesOf('InitiativeUserList', module)
  .add('default', () => (
    <InitiativeUserList initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeUserList initiative={initiative} reverse />
  ))
