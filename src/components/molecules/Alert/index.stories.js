import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Alert } from 'components'

storiesOf('Alert', module)
  .add('default', () => (
    <Alert>Hello</Alert>
  ))
  .add('reverse', () => (
    <Alert reverse>Hello</Alert>
  ))
  .add('another palette', () => (
    <Alert palette="danger">Hello</Alert>
  ))
  .add('with left thing', () => (
    <Alert left="Hi">Hello</Alert>
  ))
  .add('with right thing', () => (
    <Alert right="Hi">Hello</Alert>
  ))
