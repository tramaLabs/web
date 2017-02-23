import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailDescription } from 'components'

storiesOf('InitiativeDetailDescription', module)
  .add('default', () => (
    <InitiativeDetailDescription />
  ))
  .add('reverse', () => (
    <InitiativeDetailDescription reverse />
  ))
