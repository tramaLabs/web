import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagLink } from 'components'

storiesOf('TagLink', module)
  .add('default', () => (
    <TagLink>Hello</TagLink>
  ))
  .add('reverse', () => (
    <TagLink reverse>Hello</TagLink>
  ))
