import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from 'arc-theme'

const loading = keyframes`
  0% { transform: rotate(90deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg) scale(1.5); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${loading} 1.5s infinite ease-in-out;
  background-color: ${color(1)};
`

Spinner.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Spinner.defaultProps = {
  color: 'alpha'
}

export default Spinner
