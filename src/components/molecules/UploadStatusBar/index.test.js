import React from 'react'
import { mount, shallow } from 'enzyme'
import UploadStatusBar from '.'

const wrap = (props = {}) => shallow(<UploadStatusBar filename="test" {...props} />)

it('mounts with different props', () => {
  const mt = (props = {}) => mount(<UploadStatusBar filename="test" {...props} />)
  mt({ loading: true })
  mt({ error: true })
  mt({ progress: 1 })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders filename', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders error when passed in as string', () => {
  const wrapper = wrap({ error: 'test error' })
  expect(wrapper.contains('test error')).toBe(true)
})

it('passes progress when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.find({ progress: undefined })).toHaveLength(1)
  wrapper.setProps({ progress: 0.5 })
  expect(wrapper.find({ progress: 0.5 })).toHaveLength(1)
  wrapper.setProps({ progress: 1 })
  expect(wrapper.find({ progress: 1 })).toHaveLength(1)
})

it('passes progress 1 when error is passed in', () => {
  const wrapper = wrap({ error: true })
  expect(wrapper.find({ progress: 1 })).toHaveLength(1)
})
