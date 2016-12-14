import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, reverseColors, fonts } from 'components/globals'

const Wrapper = styled.div`
  position: relative;
  font-family: ${fonts.primary};
  background-color: ${reverseColors.grayscale[0]};
`

const color = ({ filled }) => filled ? reverseColors.grayscale[0] : colors.grayscale[0]
const backgroundColor = ({ filled }) => filled ? colors.alert[1] : reverseColors.grayscale[0]
const clipPath = ({ progress }) => progress * 100

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
  color: ${color};
  background-color: ${backgroundColor};
  clip-path: inset(0 0 0 ${clipPath}%);
  will-change: clip-path;
  transition: clip-path 250ms;
`

const UploadStatusBar = ({ filename, progress, ...props }) => {
  const text = progress > 0 ? 'Enviando...' : filename
  return (
    <Wrapper {...props}>
      <Text filled>{text}</Text>
      <Text progress={progress}>{text}</Text>
    </Wrapper>
  )
}

UploadStatusBar.propTypes = {
  filename: PropTypes.string.isRequired,
  progress: PropTypes.number
}

export default UploadStatusBar
