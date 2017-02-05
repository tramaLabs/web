import React, { PropTypes } from 'react'

import { PageTemplate, Footer, Header, InitiativeDetailHero, InitiativeDescription, Forum } from 'components'

const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<Footer />}
    >
      {initiative && <InitiativeDescription initiative={initiative} />}
      {initiative && <Forum initiative={initiative} />}
    </PageTemplate>
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.object
}

export default InitiativeDetailPage
