import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { EditableLine } from 'components'

storiesOf('EditableLine', module)
  .add('default', () => (
    <EditableLine />
  ))
