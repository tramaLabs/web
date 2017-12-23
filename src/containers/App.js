import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromUser, fromAuth } from 'store/selectors'
import { currentUserRead } from 'store/actions'

import App from 'components/App'

class AppContainer extends Component {
  static propTypes = {
    user: PropTypes.any,
    token: PropTypes.string,
    readCurrentUser: PropTypes.func.isRequired
  }

  static all({ store }) {
    if (fromAuth.getToken(store.getState())) {
      return new Promise((resolve) => {
        store.dispatch(currentUserRead.request(resolve, resolve))
      })
    }
    return null
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  token: fromAuth.getToken(state),
  user: fromUser.getCurrentDetail(state)
})

const mapDispatchToProps = (dispatch) => ({
  readCurrentUser: () => dispatch(currentUserRead.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
