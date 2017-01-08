import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Snack from '.'

storiesOf('Snack', module)
  .add('default', () => (
    <Snack show>Hello</Snack>
  ))
  .add('reverse', () => (
    <Snack show reverse>Hello</Snack>
  ))
  .add('another color', () => (
    <Snack show color="danger">Hello</Snack>
  ))
