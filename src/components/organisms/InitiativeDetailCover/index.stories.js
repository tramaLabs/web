import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { InitiativeDetailCover } from 'components'

const initiative = {
  color: 'green',
  user: {
    id: 1
  },
  photo: {
    medium: 'http://lorempixel.com/200/100/people',
    large: 'http://lorempixel.com/400/200/people'
  }
}

const props = {
  onPhotoSelect: action('photo select'),
  onPhotoUpload: action('photo upload'),
  onPreviewCancel: action('preview cancel'),
  initiative
}

storiesOf('InitiativeDetailCover', module)
  .add('default', () => (
    <InitiativeDetailCover {...props} />
  ))
  .add('reverse', () => (
    <InitiativeDetailCover {...props} reverse />
  ))
  .add('with author', () => (
    <InitiativeDetailCover {...props} user={{ id: 1 }} />
  ))
  .add('with author reverse', () => (
    <InitiativeDetailCover {...props} user={{ id: 1 }} reverse />
  ))
  .add('loading preview', () => (
    <InitiativeDetailCover {...props} user={{ id: 1 }} previewLoading />
  ))
  .add('loading preview reverse', () => (
    <InitiativeDetailCover {...props} user={{ id: 1 }} previewLoading reverse />
  ))
  .add('with preview', () => (
    <InitiativeDetailCover {...props} user={{ id: 1 }} preview="http://lorempixel.com/200/100" />
  ))
  .add('with preview reverse', () => (
    <InitiativeDetailCover
      {...props}
      user={{ id: 1 }}
      preview="http://lorempixel.com/200/100"
      reverse />
  ))
  .add('loading upload', () => (
    <InitiativeDetailCover
      {...props}
      user={{ id: 1 }}
      preview="http://lorempixel.com/200/100"
      uploadLoading />
  ))
  .add('upload progress', () => (
    <InitiativeDetailCover
      {...props}
      user={{ id: 1 }}
      preview="http://lorempixel.com/200/100"
      uploadProgress={0.5}
      uploadLoading />
  ))
  .add('upload progress reverse', () => (
    <InitiativeDetailCover
      {...props}
      user={{ id: 1 }}
      preview="http://lorempixel.com/200/100"
      uploadProgress={0.5}
      uploadLoading
      reverse />
  ))
