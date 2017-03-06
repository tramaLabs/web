import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { OfferForm } from 'containers'

storiesOf('OfferForm', module)
  .add('default', () => (
    <OfferForm />
  ))
  .add('reverse', () => (
    <OfferForm reverse />
  ))
