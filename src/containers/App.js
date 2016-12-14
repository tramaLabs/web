import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromUser, fromAuth } from 'store/selectors'
import { currentUserRead } from 'store/actions'

import { App } from 'components'

class AppContainer extends Component {
  static propTypes = {
    user: PropTypes.any,
    token: PropTypes.string,
    readCurrentUser: PropTypes.func.isRequired
  }

  static all ({ store }) {
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
