import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailHeader } from 'components'

const initiative = {
  title: 'Test title',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  user: {
    id: '123'
  }
}

storiesOf('InitiativeDetailHeader', module)
  .add('default', () => (
    <InitiativeDetailHeader initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeDetailHeader initiative={initiative} reverse />
  ))
  .add('author', () => (
    <InitiativeDetailHeader initiative={initiative} user={{ id: '123' }} />
  ))
