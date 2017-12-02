import React from 'react'
import PropTypes from 'prop-types'

import { YouseImage } from 'components'

const YouseLink = ({ width, height }) => {
  return (
    <a href={'https://www.youse.com.br'}>
      <YouseImage {...{ width, height }} />
    </a>
  )
}

YouseLink.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default YouseLink
