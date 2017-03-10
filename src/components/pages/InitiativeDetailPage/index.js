import React, { PropTypes } from 'react'

import { PageTemplate, Header, InitiativeDetailHero } from 'components'


const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<div />}
    />
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.shape({
    description: PropTypes.string
  })
}

export default InitiativeDetailPage
