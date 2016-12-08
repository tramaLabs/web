import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { fonts, colors } from 'components/globals'

const styles = ({ invalid, type, borderless }) => css`
  appearance: textfield;
  font-family: ${fonts.primary};
  display: block;
  width: 100%;
  color: inherit;
  padding: ${type === 'textarea' ? '' : '0 '}0.75rem;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  border: 1px solid ${invalid
    ? colors.danger[2]
    : borderless ? 'transparent' : colors.grayscale[3]
  };
  height: ${type === 'textarea' ? 'auto' : '2.5rem'};

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
    padding: 0;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props, type }) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  invalid: PropTypes.bool,
  borderless: PropTypes.bool,
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input
