import React from 'react'

import { PageTemplate, Footer, Header, Heading, Paragraph } from 'components'
import { InitiativeCreationForm } from 'containers'

const InitiativeCreationPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      heading={
        <div>
          <Heading palette="primary">Crie uma iniciativa</Heading>
          <Paragraph>
            Aqui você vai dar o primeiro passo para criar sua ideia. Sente-se num lugar confortável, pegue uma caneca de café e tome o tempo que você precisar para descrever bem a sua iniciativa. Uma boa proposta é chave para atrair colaboradores.
          </Paragraph>
        </div>
      }
      footer={<Footer />}
    >
      <InitiativeCreationForm />
    </PageTemplate>
  )
}

export default InitiativeCreationPage
