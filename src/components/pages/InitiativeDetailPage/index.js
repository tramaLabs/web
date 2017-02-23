import React, { PropTypes } from 'react'

import {
  PageTemplate,
  Footer,
  Header,
  InitiativeDetailHero,
  InitiativeDetailDescription,
  Forum
} from 'components'
import Helmet from 'react-helmet'

const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<Footer />}
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
      {initiative && <InitiativeDetailDescription initiative={initiative} />}
      <Forum />
    </PageTemplate>
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.object
}

export default InitiativeDetailPage
