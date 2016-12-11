import React from 'react'

import { PageTemplate, Header, Heading, Paragraph } from 'components'
import InitiativeCreationForm from 'containers/InitiativeCreationForm'

const InitiativeCreationPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      heading={
        <div>
          <Heading kind="primary">Vamos abrir a sua iniciativa</Heading>
          <Paragraph>
            Cae dolecum fuga. Et ut volupta tusdae volupta quiandae. Et accusci pienis doluptatis solorum fugit eos am fugiaep ercimusam ide volorios rem. Ihit molorib ernat. Raepedi dolupit veliciam corion et voluptat ligenient eliciis aligent. Usdae del in nos que corecus, sequo venihitatur am rati tem vid ulparuntor reria sollessed quos dem ad quia ad quassunturit ommolore mo maxim cus, sinven.
          </Paragraph>
        </div>
      }
      footer={<div />}>
      <InitiativeCreationForm />
    </PageTemplate>
  )
}

export default InitiativeCreationPage
