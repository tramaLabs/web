import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Wrapper = styled.div`
  position: relative;
  font-family: ${font('primary')};
  background-color: ${palette('grayscale', 0, true)};
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
  color: ${ifProp('filled', palette('grayscale', 0, true), palette('grayscale', 0))};
  background-color: ${ifProp('filled', palette('alert', 1), palette('grayscale', 0, true))};
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
