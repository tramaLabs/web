import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'

import { colors, reverseColors } from 'components/globals'

const loading = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`

const innerLoading = keyframes`
  0% { transform: scaleY(0); }
  25% { transform: scaleY(0); }
  50% { transform: scaleY(1); }
  75% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
`

const Spinner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${loading} 2.3s infinite ease;
  border: 0.125em solid ${(props) =>
    props.light ? reverseColors[props.kind][1] : colors[props.kind][1]
  };

  &:after {
    content: '';
    vertical-align: top;
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: top;
    animation: ${innerLoading} 2.3s infinite ease-in;
    background-color: ${(props) =>
      props.light ? reverseColors[props.kind][1] : colors[props.kind][1]
    };
  }
`

Spinner.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool
}

Spinner.defaultProps = {
  kind: 'alpha'
}

export default Spinner
