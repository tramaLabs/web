import React from 'react'
import { shallow } from 'enzyme'
import FacebookLoginButton from '.'

const appId = 'test'
const onSuccess = () => {}

const wrap = (props = {}) => shallow(<FacebookLoginButton {...{ appId, onSuccess }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
