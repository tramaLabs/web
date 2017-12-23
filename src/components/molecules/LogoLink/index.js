import React from 'react'
import PropTypes from 'prop-types'

import { Link, LogoImage } from 'components'

const LogoLink = ({ width, height, ...props }) => {
  return (
    <Link to="/" {...props}>
      <LogoImage {...{ width, height }} />
    </Link>
  )
}

LogoLink.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default LogoLink
