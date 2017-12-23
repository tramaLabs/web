import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Menu } from 'react-aria-menubutton'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

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
