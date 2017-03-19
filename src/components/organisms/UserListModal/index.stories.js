import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeUserListModal } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user3',
  name: 'User 3',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user4',
  name: 'User 4',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user5',
  name: 'User 5',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user6',
  name: 'User 6',
  picture: 'http://lorempixel.com/60/60/people'
}, {
  id: 'user7',
  name: 'User 7',
  picture: 'http://lorempixel.com/60/60/people'
}]

const initiative = { users }

storiesOf('InitiativeUserListModal', module)
  .add('default', () => (
    <InitiativeUserListModal isOpen initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeUserListModal isOpen initiative={initiative} reverse />
  ))
