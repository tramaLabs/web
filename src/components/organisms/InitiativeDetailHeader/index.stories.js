import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { InitiativeDetailHeader } from 'components'

const initiative = {
  title: 'Test title',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }]
}


storiesOf('InitiativeDetailHeader', module)
  .add('default', () => (
    <InitiativeDetailHeader initiative={initiative} onOpenSharePanelModal={action('modal open')} />
  ))
  .add('reverse', () => (
    <InitiativeDetailHeader initiative={initiative} reverse />
  ))
