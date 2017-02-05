import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InputClipboard } from 'components'

storiesOf('InputClipboard', module)
  .add('default', () => (
    <InputClipboard text="http://www.link.com" />
  ))
