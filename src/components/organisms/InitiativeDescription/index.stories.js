import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDescription } from 'components'

storiesOf('InitiativeDescription', module)
  .add('default', () => (
    <InitiativeDescription />
  ))
  .add('reverse', () => (
    <InitiativeDescription reverse />
  ))
