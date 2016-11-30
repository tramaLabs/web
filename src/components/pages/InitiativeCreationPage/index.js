import React from 'react'

import { PageTemplate } from 'components'
import { InitiativeCreationForm } from 'containers'

const InitiativeCreationPage = () => {
  return (
    <PageTemplate header={<div />} footer={<div />}>
      <InitiativeCreationForm />
    </PageTemplate>
  )
}

export default InitiativeCreationPage
