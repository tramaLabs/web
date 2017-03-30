import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDetailPage from '.'

it('renders', () => {
  shallow(<InitiativeDetailPage initiative={{ title: 'test', photo: { medium: 'test.jpg' } }} />)
})
