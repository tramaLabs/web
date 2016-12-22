import React, { PropTypes } from 'react'

import { PageTemplate, Header, InitiativeDetailHero } from 'components'

const InitiativeDetailPage = ({ initiative, ...props }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<div />}>
      {initiative && initiative.description}
    </PageTemplate>
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.shape({
    description: PropTypes.string
  })
}

export default InitiativeDetailPage
