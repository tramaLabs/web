import React from 'react'

import { PageTemplate, Footer, Header, Heading, Paragraph } from 'components'
import { InitiativeCreationForm } from 'containers'

const InitiativeCreationPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      heading={
        <div>
          <Heading palette="primary">Vamos abrir a sua iniciativa</Heading>
          <Paragraph>
            Crie aqui sua iniciativa. Explique seu propósito, como participar? Uma boa descrição é chave para o sucesso da sua iniciativa'
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
