import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { InitiativeCreationPage } from 'components'
import { config } from './PostForm'

class InitiativeCreationPageContainer extends Component {
  static post ({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  render () {
    return <InitiativeCreationPage />
  }
}

export default InitiativeCreationPageContainer
