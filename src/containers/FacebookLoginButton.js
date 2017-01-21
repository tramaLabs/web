import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus } from 'store/selectors'
import { authLogin, AUTH_LOGIN, CURRENT_USER_READ } from 'store/actions'
import { fbAppId } from 'config'

import { IconButton } from 'components'

class FacebookLoginButtonContainer extends Component {
  static propTypes = {
    prepareAuth: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.prepareAuth()
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { prepareAuth, ...props } = this.props
    return <IconButton icon="facebook" {...props} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, [AUTH_LOGIN, CURRENT_USER_READ])
})

const mapDispatchToProps = (dispatch, { onSuccess }) => ({
  prepareAuth: () => dispatch(authLogin.prepare('facebook', { appId: fbAppId })),
  onClick: () => dispatch(authLogin.request('facebook', onSuccess))
})

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButtonContainer)
