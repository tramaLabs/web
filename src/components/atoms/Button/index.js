import omit from 'lodash/omit'
import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { Button as MenuButton } from 'react-aria-menubutton'
import { font, palette, ifProp } from 'styled-theme'

import { Spinner } from 'components'

const fontSize = ({ height }) => `${height / 53.33333}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : palette(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) =>
  !disabled && !transparent && palette(0) || 'rgba(255, 255, 255, 0.4)'

const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 2px solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  height: 3.3333em;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1.3333em;
  box-sizing: border-box;
  text-transform: uppercase;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, palette 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none
  }
  > span > .children {
    display: block;
    visibility: hidden;
    height: 0;
  }
`

const excluded = ['component', 'disabled', 'loading', 'transparent', 'reverse', 'palette', 'height']
const omitProps = (props) => omit(props, excluded)

const Component = styled(({ component, ...props }) =>
  React.createElement(component, omitProps(props))
)`${styles}`

const StyledMenuButton = styled((props) => <MenuButton {...omitProps(props)} />)`${styles}`
const StyledLink = styled((props) => <Link {...omitProps(props)} />)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

// eslint-disable-next-line react/prop-types
const renderChildrenWithSpinner = ({ children, reverse }) => (
  <span>
    <span className="children">{children}</span>
    <Spinner reverse={!reverse} palette="alpha" />
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
  palette: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  component: PropTypes.any
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40
}

export default Button
