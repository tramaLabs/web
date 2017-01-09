import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagList } from 'components'

const tags = [{ name: 'tag1' }, { name: 'tag2' }]

storiesOf('TagList', module)
  .add('default', () => (
    <TagList tags={tags} />
  ))
  .add('reverse', () => (
    <TagList tags={tags} reverse />
  ))
