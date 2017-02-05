import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchPage } from 'containers'

storiesOf('SearchPage', module)
  .add('default', () => (
    <SearchPage />
  ))
