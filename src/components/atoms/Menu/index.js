import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Menu } from 'react-aria-menubutton'

import { colors, fonts } from 'components/globals'

const StyledMenu = styled(({ right, ...props }) => <Menu {...props} />)`
  position: absolute;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[0]};
  background-color: white;
  min-width: 100%;
  right: ${(props) => props.right ? 0 : 'auto'};
  border: 1px solid ${colors.grayscale[3]};
  box-sizing: border-box;
  z-index: 999;
`

StyledMenu.propTypes = {
  right: PropTypes.bool
}

export default StyledMenu
