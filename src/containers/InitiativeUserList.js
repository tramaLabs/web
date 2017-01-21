import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'

import { InitiativeUserList } from 'components'

const InitiativeUserListContainer = props => <InitiativeUserList {...props} />

const mapDispatchToProps = (dispatch) => ({
  onOpenInitiativeUserListModal: () => dispatch(modalShow('initiativeUserList'))
})

export default connect(undefined, mapDispatchToProps)(InitiativeUserListContainer)
