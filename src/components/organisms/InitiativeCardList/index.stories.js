import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeCardList } from 'components'

const initiatives = [{
  title: 'Test title',
  tags: [{ name: 'tag1' }, { name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100'
  }
}, {
  title: 'Test title 2',
  tags: [{ name: 'tag1' }, { name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100'
  }
}]

storiesOf('InitiativeCardList', module)
  .add('default', () => (
    <InitiativeCardList initiatives={initiatives} />
  ))
  .add('reverse', () => (
    <InitiativeCardList initiatives={initiatives} reverse />
  ))
