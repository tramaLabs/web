import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { Button as MenuButton } from 'react-aria-menubutton'

import { colors, fonts } from 'components/globals'

const styles = ({ disabled, transparent, light, kind, size }) => {
  const color = light ? [ ...colors[kind] ].reverse() : colors[kind]
  return css`
    display: inline-flex;
    font-family: ${fonts.primary};
    align-items: center;
    font-size: ${size ? size / 53.33333 + 'rem' : '0.75rem'};
    font-weight: 500;
    background-color: ${transparent ? 'transparent' : (disabled ? color[2] : color[1])};
    border: 2px solid ${transparent ? 'currentcolor' : 'transparent'};
    height: 3.33333em;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: ${disabled ? 'default' : 'pointer'};
    appearance: none;
    padding: 0 1.3333em;
    box-sizing: border-box;
    pointer-events: ${disabled && 'none'};
    color: ${transparent
      ? (disabled ? color[2] : color[1])
      : (light ? colors.grayscale[0] : [ ...colors.grayscale ].reverse()[0])
    };

    &:hover, &:focus, &:active {
      background-color: ${disabled ||
        transparent && 'rgba(255, 255, 255, 0.4)' ||
        color[0]};
      color: ${disabled || transparent && color[0]};
    }

    &:focus {
      outline: none
    }
  `
}

const StyledMenuButton = styled(({ disabled, transparent, light, kind, size, ...props }) =>
  <MenuButton {...props} />
)`${styles}`
const StyledLink = styled(({ disabled, transparent, light, kind, size, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props, to, href }) => {
  if (type === 'menu') {
    return <StyledMenuButton {...props} />
  } else if (to) {
    return <StyledLink {...props} />
  } else if (href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(Object.keys(colors)).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

Button.defaultProps = {
  kind: 'primary',
  type: 'button'
}

export default Button
