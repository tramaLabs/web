import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagList } from 'components'

const tags = [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }]

storiesOf('TagList', module)
  .add('default', () => (
    <TagList tags={tags} />
  ))
  .add('reverse', () => (
    <TagList tags={tags} reverse />
  ))
