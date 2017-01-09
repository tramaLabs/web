import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeCreationForm } from 'containers'

storiesOf('InitiativeCreationForm', module)
  .add('default', () => (
    <InitiativeCreationForm />
  ))
  .add('reverse', () => (
    <InitiativeCreationForm reverse />
  ))
