import React, { PropTypes } from 'react'
import styled from 'styled-components'
import FacebookProvider, { Comments } from 'react-facebook'
import { fbAppId } from 'config'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  & > * {
    margin: 0.5rem;
    width: calc(33% - 1rem);
    height: 250px;
    @media screen and (max-width: 1024px) {
      width: calc(50% - 1rem);
    }
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const Forum = ({ ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <FacebookProvider appID={fbAppId}>
        <Comments />
      </FacebookProvider>
    </Wrapper>
  )
}

Forum.propTypes = {
  reverse: PropTypes.bool
}

export default Forum
