import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchForm } from 'containers'

storiesOf('SearchForm', module)
  .add('default', () => (
    <SearchForm />
  ))
  .add('reverse', () => (
    <SearchForm reverse />
  ))
  .add('transparent', () => (
    <SearchForm transparent />
  ))
  .add('transparent grayscale', () => (
    <SearchForm palette="grayscale" transparent />
  ))
