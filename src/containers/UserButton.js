import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromEntities, fromUser } from 'store/selectors'
import { authLogout } from 'store/actions'

import { UserButton } from 'components'

class UserButtonContainer extends Component {
  render () {
    return <UserButton {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})

const mapDispatchToProps = {
  onUserLogout: authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)
