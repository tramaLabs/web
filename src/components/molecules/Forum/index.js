import React from 'react'
import styled from 'styled-components'
import FacebookProvider, { Comments } from 'react-facebook'
import { fbAppId } from 'config'

const Wrapper = styled.div`
  padding: 0.5rem;
`

const Forum = (props) => {
  if (typeof window === 'undefined') return null
  const { origin, pathname } = window.location
  return (
    <Wrapper {...props}>
      <FacebookProvider appID={fbAppId}>
        <Comments href={origin + pathname} />
      </FacebookProvider>
    </Wrapper>
  )
}

export default Forum
