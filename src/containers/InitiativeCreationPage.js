import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { InitiativeCreationPage } from 'components'
import { config } from './InitiativeCreationForm'

class InitiativeCreationPageContainer extends Component {
  static post ({ req, res, store }) {
    return store.dispatch(submit(config, req.body)).then((url) => {
      res.redirect(url)
    })
  }

  render () {
    return <InitiativeCreationPage {...this.props} />
  }
}

export default InitiativeCreationPageContainer
