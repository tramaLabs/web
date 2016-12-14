import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus } from 'store/selectors'
import { authFacebook, AUTH, CURRENT_USER_READ } from 'store/actions'
import { fbAppId } from 'config'

import { FacebookLoginButton } from 'components'

class FacebookLoginButtonContainer extends Component {
  render () {
    return <FacebookLoginButton {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, [AUTH, CURRENT_USER_READ]),
  appId: fbAppId
})

const mapDispatchToProps = (dispatch, { onSuccess }) => ({
  onSuccess: (fbToken) => dispatch(authFacebook.request(fbToken, onSuccess))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButtonContainer)
