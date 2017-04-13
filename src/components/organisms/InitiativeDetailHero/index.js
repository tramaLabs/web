import React, { PropTypes } from 'react'

import { InitiativeDetailCover, InitiativeDetailHeader, InitiativeDetailInfo } from 'containers'

const InitiativeDetailHero = ({ initiative, reverse, ...props }) => {
  return (
    <div {...props}>
      <InitiativeDetailCover initiative={initiative} reverse={reverse}>
        <InitiativeDetailHeader editionModalName={'initiativeEdition'} initiative={initiative} reverse={!reverse} />
      </InitiativeDetailCover>
      <InitiativeDetailInfo modalTitle={'Edite sua iniciativa'} modalName={'initiativeEdition'} initiative={initiative} reverse={reverse} />
    </div>
  )
}

InitiativeDetailHero.propTypes = {
  initiative: PropTypes.object,
  reverse: PropTypes.bool
}

export default InitiativeDetailHero
