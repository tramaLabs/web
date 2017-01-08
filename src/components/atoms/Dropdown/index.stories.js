import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Dropdown from '.'

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown onSelection={action('selected')}>Hello</Dropdown>
  ))
