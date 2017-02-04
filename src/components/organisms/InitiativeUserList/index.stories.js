import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { InitiativeUserList } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user3',
  name: 'User 3',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user4',
  name: 'User 4',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user5',
  name: 'User 5',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user6',
  name: 'User 6',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user7',
  name: 'User 7',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}]

const initiative = { users }
const onOpenInitiativeUserListModal = action('modal open')
const props = { initiative, onOpenInitiativeUserListModal }

storiesOf('InitiativeUserList', module)
  .add('default', () => (
    <InitiativeUserList {...props} />
  ))
  .add('reverse', () => (
    <InitiativeUserList {...props} reverse />
  ))
