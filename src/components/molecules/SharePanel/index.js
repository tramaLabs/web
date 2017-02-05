import React, { PropTypes } from 'react'
import styled from 'styled-components'
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0.5rem;
  }
`

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')

const SharePanel = ({ initiative, ...props }) => {
  const shareUrl = window.location.href
  const title = initiative.title

  return (
    <Wrapper {...props}>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

    </Wrapper>

  )
}
SharePanel.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.String
  }).isRequired
}

export default SharePanel
