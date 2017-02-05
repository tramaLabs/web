import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { InitiativeDetailHero } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/60/60/people',
  services: {
    facebook: 'foo'
  }
}]

const initiative = {
  color: 'green',
  title: 'Test title',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  photo: {
    medium: 'http://lorempixel.com/200/100/people',
    large: 'http://lorempixel.com/400/200/people'
  },
  user: users[0],
  users
}

const props = {
  onPhotoSelect: action('photo select'),
  onPhotoUpload: action('photo upload'),
  onPreviewCancel: action('preview cancel'),
  initiative
}

storiesOf('InitiativeDetailHero', module)
  .add('default', () => (
    <InitiativeDetailHero {...props} />
  ))
  .add('reverse', () => (
    <InitiativeDetailHero {...props} reverse />
  ))
