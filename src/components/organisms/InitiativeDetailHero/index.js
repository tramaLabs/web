import React, { PropTypes } from 'react'

import { InitiativeDetailHeader, InitiativeDetailInfo } from 'components'
import { InitiativeDetailCover } from 'containers'

const InitiativeDetailHero = ({ initiative, ...props }) => {
  return (
    <div {...props}>
      <InitiativeDetailCover initiative={initiative}>
        <InitiativeDetailHeader initiative={initiative} />
      </InitiativeDetailCover>
      <InitiativeDetailInfo initiative={initiative} />
    </div>
  )
}

InitiativeDetailHero.propTypes = {
  initiative: PropTypes.object
}

export default InitiativeDetailHero
