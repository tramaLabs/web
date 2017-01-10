import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { InitiativeJoinButton } from 'components'

const initiative = {
  user: { id: 1 },
  users: [{ id: 1 }, { id: 2 }]
}

const onLeave = action('left')
const onJoin = action('joined')

const props = { initiative, onLeave, onJoin }

storiesOf('InitiativeJoinButton', module)
  .add('default', () => (
    <InitiativeJoinButton {...props} />
  ))
  .add('as author', () => (
    <InitiativeJoinButton {...props} user={{ id: 1 }} />
  ))
  .add('as member', () => (
    <InitiativeJoinButton {...props} user={{ id: 2 }} />
  ))
  .add('as another user', () => (
    <InitiativeJoinButton {...props} user={{ id: 3 }} />
  ))
  .add('as another user loading', () => (
    <InitiativeJoinButton {...props} user={{ id: 3 }} loading />
  ))
  .add('reverse', () => (
    <InitiativeJoinButton {...props} reverse />
  ))
