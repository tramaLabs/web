import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDemandBoard } from 'components'

const initiatives = [{
  id: 'initiative1',
  title: 'Test title',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100'
  }
}, {
  id: 'initiative2',
  title: 'Test title 2',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100'
  }
}]

storiesOf('InitiativeDemandBoard', module)
  .add('default', () => (
    <InitiativeDemandBoard initiatives={initiatives} />
  ))
  .add('reverse', () => (
    <InitiativeDemandBoard initiatives={initiatives} reverse />
  ))
