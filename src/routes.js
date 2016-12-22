import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { HomePage, InitiativeCreationPage } from 'components'
import { App, InitiativeDetailPage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/iniciativas/criar" component={InitiativeCreationPage} />
    <Route path="/iniciativas/:id(/:slug)" component={InitiativeDetailPage} />
  </Route>
)

export default routes
