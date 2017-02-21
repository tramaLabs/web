import React from 'react'
import { shallow } from 'enzyme'
import SharePanel from '.'

const initiative = {
  title: 'initiative',
  description: 'desc',
  picture: 'pathtopic',
  hashtags: ['tag1', 'tag2', 'tag3']
}

const wrap = (props = {}) => shallow(<SharePanel initiative={initiative} {...props} />).dive()


it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})
