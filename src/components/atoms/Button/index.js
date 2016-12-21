import omit from 'lodash/omit'
import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { Button as MenuButton } from 'react-aria-menubutton'

import { colors, reverseColors, fonts } from 'components/globals'
import { Spinner } from 'components'

const styles = ({ loading, disabled, transparent, light, kind, size }) => {
  const color = light ? reverseColors[kind] : colors[kind]
  return css`
    display: inline-flex;
    font-family: ${fonts.primary};
    align-items: center;
    white-space: nowrap;
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
      : (light ? colors.grayscale[0] : reverseColors.grayscale[0])
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

    & > span > .children {
      display: block;
      visibility: hidden;
      height: 0;
    }
  `
}

const propsToOmit = ['component', 'disabled', 'loading', 'transparent', 'light', 'kind', 'size']
const omitProps = (props) => omit(props, propsToOmit)

const Component = styled(({ component, ...props }) =>
  React.createElement(component, omitProps(props))
)`${styles}`

const StyledMenuButton = styled((props) => <MenuButton {...omitProps(props)} />)`${styles}`
const StyledLink = styled((props) => <Link {...omitProps(props)} />)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

// eslint-disable-next-line react/prop-types
const renderChildrenWithSpinner = ({ children, light }) => (
  <span>
    <span className="children">{children}</span>
    <Spinner light={!light} kind="alpha" />
  </span>
)

const Button = ({ type, ...props, component, to, href }) => {
  const propsToPass = {
    ...props,
    disabled: props.loading || props.disabled,
    children: props.loading ? renderChildrenWithSpinner(props) : props.children
  }
  if (component) {
    return <Component {...propsToPass} />
  } else if (type === 'menu') {
    return <StyledMenuButton {...propsToPass} />
  } else if (to) {
    return <StyledLink {...propsToPass} />
  } else if (href) {
    return <Anchor {...propsToPass} />
  }
  return <StyledButton {...propsToPass} type={type} />
}

Button.propTypes = {
  children: PropTypes.any,
  kind: PropTypes.oneOf(Object.keys(colors)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  component: PropTypes.any
}

Button.defaultProps = {
  kind: 'primary',
  type: 'button'
}

export default Button
