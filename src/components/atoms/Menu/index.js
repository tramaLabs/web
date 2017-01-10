import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Menu } from 'react-aria-menubutton'
import { font, color, reverseColor, ifProps } from 'arc-theme'

const StyledMenu = styled(({ right, theme, ...props }) => <Menu {...props} />)`
  position: absolute;
  font-family: ${font('primary')};
  color: ${color('grayscale', 0)};
  background-color: ${reverseColor('grayscale', 0)};
  min-width: 100%;
  right: ${ifProps('right', 0, 'auto')};
  border: 1px solid ${color('grayscale', 3)};
  box-sizing: border-box;
  z-index: 999;
`

StyledMenu.propTypes = {
  right: PropTypes.bool,
  reverse: PropTypes.bool
}

export default StyledMenu
