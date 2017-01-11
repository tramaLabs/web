import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Menu } from 'react-aria-menubutton'
import { font, palette, ifProp } from 'styled-theme'

const StyledMenu = styled(({ right, theme, ...props }) => <Menu {...props} />)`
  position: absolute;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  background-color: ${palette('grayscale', 0, true)};
  min-width: 100%;
  right: ${ifProp('right', 0, 'auto')};
  border: 1px solid ${palette('grayscale', 3)};
  box-sizing: border-box;
  z-index: 999;
`

StyledMenu.propTypes = {
  right: PropTypes.bool,
  reverse: PropTypes.bool
}

export default StyledMenu
