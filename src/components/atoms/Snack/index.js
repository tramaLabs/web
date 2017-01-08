import { PropTypes } from 'react'
import styled from 'styled-components'
import { key, font, color, reverseColor, ifProps } from 'arc-theme'

const Snack = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  font-family: ${font('primary')};
  line-height: 1.5;
  font-size: 0.875rem;
  padding: 0 1.14em;
  margin: 0 1rem;
  top: ${key('sizes.headerHeight')};
  left: calc(50% - 1rem);
  height: 2.8571em;
  max-width: calc(100% - 2rem);
  white-space: nowrap;
  box-sizing: border-box;
  opacity: ${ifProps('show', 1, 0)};
  transform: translate(-50%, ${ifProps('show', 0, -key('sizes.headerHeight'))});
  transition: transform 200ms ease-out, opacity 100ms ease-out;
  color: ${reverseColor('grayscale', 0)};
  background-color: ${color(1)};
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
  color: PropTypes.string,
  reverse: PropTypes.bool,
  show: PropTypes.bool
}

Snack.defaultProps = {
  color: 'success',
  role: 'alert'
}

export default Snack
