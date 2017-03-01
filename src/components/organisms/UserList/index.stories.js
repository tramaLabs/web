import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { UserList } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user3',
  name: 'User 3',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user4',
  name: 'User 4',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user5',
  name: 'User 5',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user6',
  name: 'User 6',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}, {
  id: 'user7',
  name: 'User 7',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'user'
  }
}]

const initiative = { users }
const onOpenInitiativeUserListModal = action('modal open')
const props = { initiative, onOpenInitiativeUserListModal }

storiesOf('UserList', module)
  .add('default', () => (
    <UserList {...props} />
  ))
  .add('reverse', () => (
    <UserList {...props} reverse />
  ))
