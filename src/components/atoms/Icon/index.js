import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = ({ size, color }) => css`
  display: inline-block;
  width: ${size ? size / 10.66667 + 'rem' : '1.5em'};
  height: ${size ? size / 10.66667 + 'rem' : '1.5em'};
  padding: ${size ? size / 128 + 'rem' : '0.125em'};
  box-sizing: border-box;
  color: ${color};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Wrapper = styled.span`${styles}`

const Icon = ({ icon, ...props }) => {
  const svg = require(`raw!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Icon
