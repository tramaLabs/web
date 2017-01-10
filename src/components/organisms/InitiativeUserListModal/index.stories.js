import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeUserListModal } from 'components'

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
  users: users.concat(users, users, users, users)
}

storiesOf('InitiativeUserListModal', module)
  .add('default', () => (
    <InitiativeUserListModal isOpen initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeUserListModal isOpen initiative={initiative} reverse />
  ))
