import React, { PropTypes } from 'react'

import { PageTemplate, Header, InitiativeDetailHero } from 'components'
import Helmet from 'react-helmet'

const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<div />}
    >
      <Helmet
        title="Trama"
        meta={[
            { name: 'description', content: initiative.description },
            { property: 'og:site_name', content: 'Trama' },
            { property: 'og:image', content: initiative.picture },
            { property: 'og:image:type', content: 'image/png' },
        ]}
      />
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
