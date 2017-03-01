import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { OfferButton } from 'components'

const initiative = {
  user: { id: 1 },
  users: [{ id: 1 }, { id: 2 }]
}

const onLeave = action('left')
const onJoin = action('joined')

const props = { initiative, onLeave, onJoin }

storiesOf('OfferButton', module)
  .add('default', () => (
    <OfferButton {...props} />
  ))
  .add('as author', () => (
    <OfferButton {...props} user={{ id: 1 }} />
  ))
  .add('as member', () => (
    <OfferButton {...props} user={{ id: 2 }} />
  ))
  .add('as another user', () => (
    <OfferButton {...props} user={{ id: 3 }} />
  ))
  .add('as another user loading', () => (
    <OfferButton {...props} user={{ id: 3 }} loading />
  ))
  .add('reverse', () => (
    <OfferButton {...props} reverse />
  ))
