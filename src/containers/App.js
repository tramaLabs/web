import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromUser, fromAuth, currentUserRead } from 'store'

import App from 'components/App'

class AppContainer extends Component {
  static propTypes = {
    user: PropTypes.any,
    token: PropTypes.string,
    readCurrentUser: PropTypes.func.isRequired
  }

  static get ({ store }) {
    if (fromAuth.getToken(store.getState())) {
      return new Promise((resolve) => {
        store.dispatch(currentUserRead.request(resolve, resolve))
      })
    }
  }

  render () {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  token: fromAuth.getToken(state),
  user: fromUser.getCurrentId(state)
})

const mapDispatchToProps = (dispatch) => ({
  readCurrentUser: () => dispatch(currentUserRead.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
