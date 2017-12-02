import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette } from 'styled-theme'

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
  background-color: ${palette(1)};
`

Spinner.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool
}

Spinner.defaultProps = {
  palette: 'alpha'
}

export default Spinner
