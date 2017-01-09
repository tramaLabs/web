import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailHeader } from 'components'

const initiative = {
  title: 'Test title',
  tags: [{ name: 'tag1' }, { name: 'tag2' }]
}

storiesOf('InitiativeDetailHeader', module)
  .add('default', () => (
    <InitiativeDetailHeader initiative={initiative} />
  ))
  .add('reverse', () => (
    <InitiativeDetailHeader initiative={initiative} reverse />
  ))
