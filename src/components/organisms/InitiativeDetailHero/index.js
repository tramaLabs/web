import React, { PropTypes } from 'react'

import { InitiativeDetailInfo } from 'components'
import { InitiativeDetailCover, InitiativeDetailHeader } from 'containers'

const InitiativeDetailHero = ({ initiative, reverse, ...props }) => {
  return (
    <div {...props}>
      <InitiativeDetailCover initiative={initiative} reverse={reverse}>
        <InitiativeDetailHeader initiative={initiative} reverse={!reverse} />
      </InitiativeDetailCover>
      <InitiativeDetailInfo initiative={initiative} reverse={reverse} />
    </div>
  )
}

InitiativeDetailHero.propTypes = {
  initiative: PropTypes.object,
  reverse: PropTypes.bool
}

export default InitiativeDetailHero
