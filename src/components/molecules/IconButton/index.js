import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { animations } from 'components/globals'
import { Icon, Button } from 'components'

const buttonStyles = ({ hasText, right, responsive, collapsed }) => css`
  max-width: ${hasText && !collapsed ? '100%' : 'calc(3.3333em + 0.666em * 2)'};
  padding: 0 0.666em;
  ${collapsed && css`
    transition: max-width 250ms ease-in-out;
    will-change: max-width;
    & .text {
      display: none;
    }
    &:hover {
      max-width: 100%;
      & .text {
        display: block;
        animation: ${animations.fadeIn} 250ms;
      }
    }
  `}
  @media screen and (max-width: 420px) {
    width: ${responsive && '3.3333em'};
  }
`

const textStyle = ({ responsive }) => css`
  padding: 0.666em;
  @media screen and (max-width: 420px) {
    display: ${responsive && 'none'};
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const StyledButton = styled(({ hasText, right, responsive, collapsed, ...props }) =>
  <Button {...props} />
)`${buttonStyles}`
const Text = styled.span`${textStyle}`

const IconButton = ({ color, icon, right, children, collapsed, ...props, responsive, size }) => {
  const iconElement = <Icon size={size && size / 2.5 || 16} icon={icon} color={color} />
  return (
    <StyledButton hasText={!!children} collapsed={collapsed} right={right} {...props}>
      <Wrapper>
        {right || iconElement}
        {children && <Text className="text" responsive={responsive}>{children}</Text>}
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  collapsed: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.any
}

export default IconButton
