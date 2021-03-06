import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'

import { UserList } from 'components'

const UserListContainer = props => <UserList {...props} />

const mapDispatchToProps = (dispatch, { modalName }) => ({
  onOpenUserListModal: () => dispatch(modalShow(modalName))
})

export default connect(undefined, mapDispatchToProps)(UserListContainer)
