import React, { PropTypes } from 'react'

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
