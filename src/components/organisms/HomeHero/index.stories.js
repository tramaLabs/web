import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { HomeHero } from 'components'

storiesOf('HomeHero', module)
  .add('default', () => (
    <HomeHero />
  ))
  .add('reverse', () => (
    <HomeHero reverse />
  ))
