import React, { Component } from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'

import { InitiativeUserList } from 'components'

class InitiativeUserListContainer extends Component {
  render () {
    return <InitiativeUserList {...this.props} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  onOpenInitiativeUserListModal: () => dispatch(modalShow('initiativeUserList'))
})

export default connect(undefined, mapDispatchToProps)(InitiativeUserListContainer)
