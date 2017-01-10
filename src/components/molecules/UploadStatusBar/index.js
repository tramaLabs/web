import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor, ifProps } from 'arc-theme'

const Wrapper = styled.div`
  position: relative;
  font-family: ${font('primary')};
  background-color: ${reverseColor('grayscale', 0)};
  height: 2.5rem;
`

const Text = styled.div`
  position: absolute;
  width: calc(100% - 0.250rem);
  height: calc(100% - 0.250rem);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.125rem;
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  color: ${ifProps('filled', reverseColor('grayscale', 0), color('grayscale', 0))};
  background-color: ${ifProps('filled', color('alert', 1), reverseColor('grayscale', 0))};
  clip-path: inset(0 0 0 ${({ progress }) => progress * 100}%);
  will-change: clip-path;
  transition: clip-path 250ms;
`

const UploadStatusBar = ({ filename, progress, ...props, reverse }) => {
  const text = progress > 0 ? 'Enviando...' : filename
  return (
    <Wrapper {...props}>
      <Text reverse={reverse} filled>{text}</Text>
      <Text reverse={reverse} progress={progress}>{text}</Text>
    </Wrapper>
  )
}

UploadStatusBar.propTypes = {
  filename: PropTypes.string.isRequired,
  progress: PropTypes.number,
  reverse: PropTypes.bool
}

export default UploadStatusBar
