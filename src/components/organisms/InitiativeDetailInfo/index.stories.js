import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailInfo } from 'components'

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
}]

const initiative = {
  summary: 'Sit ipsum in ex cillum exercitation eu sint ipsum labore nisi incididunt adipisicing amet. Excepteur fugiat culpa in ipsum aliquip culpa sunt aliquip labore do nostrud mollit dolore exercitation nulla amet. Officia mollit adipisicing non ex amet qui commodo. Esse commodo duis velit eu ullamco sunt ex irure.',
  user: users[0],
  users
}

storiesOf('InitiativeDetailInfo', module)
  .add('default', () => (
    <InitiativeDetailInfo initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeDetailInfo initiative={initiative} reverse />
  ))
