import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { HomePage } from 'components'
import { App, InitiativeCreationPage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/initiatives/create" component={InitiativeCreationPage} />
  </Route>
)

export default routes
