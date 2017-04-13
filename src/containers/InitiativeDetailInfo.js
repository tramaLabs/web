import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'

import { InitiativeDetailInfo } from 'components'

const InitiativeDetailInfoContainer = props => <InitiativeDetailInfo {...props} />

const mapDispatchToProps = (dispatch, { modalName }) => ({
  onOpenInitiativeDetailInfoModal: () => dispatch(modalShow(modalName))
})

export default connect(undefined, mapDispatchToProps)(InitiativeDetailInfoContainer)
