import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LogoLink } from 'components'

storiesOf('LogoLink', module)
  .add('default', () => (
    <LogoLink href="#" />
  ))
  .add('with width', () => (
    <LogoLink href="#" width={200} />
  ))
  .add('with height', () => (
    <LogoLink href="#" height={200} />
  ))
