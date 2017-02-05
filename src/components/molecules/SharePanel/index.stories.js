import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SharePanel } from 'components'

const initiative = { title: 'initiative' }

storiesOf('SharePanel', module)
  .add('default', () => (
    <SharePanel initiative={initiative}>Hello</SharePanel>
  ))

