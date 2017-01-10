import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UploadStatusBar } from 'components'

storiesOf('UploadStatusBar', module)
  .add('default', () => (
    <UploadStatusBar filename="test.jpg" />
  ))
  .add('reverse', () => (
    <UploadStatusBar filename="test.jpg" reverse />
  ))
  .add('progress', () => (
    <UploadStatusBar filename="test.jpg" progress={0.5} />
  ))
  .add('progress reverse', () => (
    <UploadStatusBar filename="test.jpg" progress={0.5} reverse />
  ))
