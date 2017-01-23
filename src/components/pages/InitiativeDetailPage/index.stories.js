import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { InitiativeDetailPage } from 'components'

const users = [{
  id: 'user1',
  name: 'User 1',
  picture: 'http://lorempixel.com/40/40/people'
}, {
  id: 'user2',
  name: 'User 2',
  picture: 'http://lorempixel.com/40/40/people'
}]

const initiative = {
  id: 'initiative1',
  title: 'Test initiative',
  summary: 'Enim ipsum labore occaecat eiusmod nulla reprehenderit cillum proident in amet sunt adipisicing ullamco aliquip. Cillum sunt sit officia duis amet ea incididunt eu sint mollit ipsum excepteur excepteur ex enim. Dolore occaecat commodo qui nulla id mollit labore eiusmod consequat proident anim proident aute aliqua consequat. Veniam consectetur mollit aliquip cillum deserunt sint voluptate ea excepteur officia aute cupidatat aliqua.',
  description: 'Est incididunt anim fugiat aliqua magna tempor in adipisicing do veniam consequat. Tempor consequat excepteur adipisicing veniam dolore excepteur voluptate voluptate ut irure. Pariatur occaecat do esse et officia nostrud esse sunt minim do cillum. Proident eiusmod sit veniam mollit ipsum mollit adipisicing Lorem pariatur elit sit minim occaecat. Labore est reprehenderit aute dolor adipisicing veniam proident. Aliquip in eiusmod incididunt adipisicing nulla pariatur do excepteur. Ex nulla ad mollit magna eu eu pariatur et commodo eiusmod mollit in et laborum commodo.',
  tags: [{ id: 'tag1', name: 'tag1' }, { id: 'tag2', name: 'tag2' }],
  color: 'green',
  photo: {
    small: 'http://lorempixel.com/200/100/people',
    medium: 'http://lorempixel.com/400/200/people',
    large: 'http://lorempixel.com/800/400/people'
  },
  user: users[0],
  users
}

storiesOf('InitiativeDetailPage', module)
  .add('default', () => (
    <InitiativeDetailPage initiative={initiative} />
  ))
