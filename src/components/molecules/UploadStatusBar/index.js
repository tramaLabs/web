import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, reverseColors, fonts } from 'components/globals'

const Wrapper = styled.div`
  position: relative;
  font-family: ${fonts.primary};
  background-color: ${reverseColors.grayscale[0]};
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
  color: ${(props) => props.filled ? reverseColors.grayscale[0] : colors.grayscale[0]};
  background-color: ${(props) =>
    props.filled
    ? (props.error ? colors.danger[1] : colors.alert[1])
    : reverseColors.grayscale[0]
  };
  clip-path: inset(0 0 0 ${(props) => props.progress * 100}%);
  will-change: clip-path;
  transition: clip-path 250ms;
`

const UploadStatusBar = ({ filename, loading, error, progress, ...props }) => {
  const errorMessage = typeof error === 'string' ? error : 'Ocorreu um erro no upload'
  const text = error ? errorMessage : (loading ? 'Enviando...' : filename)
  return (
    <Wrapper {...props}>
      <Text filled error={error}>{text}</Text>
      <Text progress={progress || (error && 1)}>{text}</Text>
    </Wrapper>
  )
}

UploadStatusBar.propTypes = {
  filename: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  progress: PropTypes.number
}

export default UploadStatusBar
