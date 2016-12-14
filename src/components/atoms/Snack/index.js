import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, reverseColors, fonts, headerHeight } from 'components/globals'

const color = ({ light }) => light ? colors.grayscale[0] : reverseColors.grayscale[0]
const backgroundColor = ({ light, kind }) => light ? reverseColors[kind][1] : colors[kind][1]
const opacity = ({ show }) => show ? 1 : 0
const translateY = ({ show }) => show ? 0 : `-${headerHeight}`

const Snack = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  font-family: ${fonts.primary};
  line-height: 1.5;
  font-size: 0.875rem;
  padding: 0 1.14em;
  margin: 0 1rem;
  top: ${headerHeight};
  left: calc(50% - 1rem);
  height: 2.8571em;
  max-width: calc(100% - 2rem);
  white-space: nowrap;
  box-sizing: border-box;
  opacity: ${opacity};
  transform: translate(-50%, ${translateY});
  transition: transform 200ms ease-out, opacity 100ms ease-out;
  color: ${color};
  background-color: ${backgroundColor};
  z-index: 999;
  pointer-events: none;
  @media screen and (max-width: 640px) {
    width: 100%;
    max-width: none;
    margin: 0;
    height: auto;
    padding: 1.14em;
    left: 50%;
    white-space: normal;
  }
`

Snack.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool,
  show: PropTypes.bool
}

Snack.defaultProps = {
  kind: 'success'
}

export default Snack
