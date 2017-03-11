import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DemandCard } from 'components'

const initiative = {
  title: 'Test title',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100'
  }
}

storiesOf('DemandCard', module)
  .add('default', () => (
    <DemandCard initiative={initiative} />
  ))
  .add('reverse', () => (
    <DemandCard initiative={initiative} reverse />
  ))
