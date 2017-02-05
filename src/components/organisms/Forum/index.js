import React, { PropTypes } from 'react'
import styled from 'styled-components'
import FacebookProvider, { Comments } from 'react-facebook'
import { fbAppId, baseUrl } from 'config'

const Wrapper = styled.div`
  padding: 0.5rem;
`

const Forum = ({ initiative, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <FacebookProvider appID={fbAppId}>
        <Comments href={`${baseUrl}/${initiative.id}/${initiative.slug}`} />
      </FacebookProvider>
    </Wrapper>
  )
}

Forum.propTypes = {
  reverse: PropTypes.bool,
  initiative: PropTypes.shape({
    id: PropTypes.any.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default Forum
