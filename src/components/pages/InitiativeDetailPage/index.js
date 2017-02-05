import React, { PropTypes } from 'react'

import { PageTemplate, Footer, Header, InitiativeDetailHero } from 'components'

const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<Footer />}
    >
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
