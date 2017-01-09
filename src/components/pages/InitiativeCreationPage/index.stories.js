import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeCreationPage } from 'components'

storiesOf('InitiativeCreationPage', module)
  .add('default', () => (
    <InitiativeCreationPage />
  ))
