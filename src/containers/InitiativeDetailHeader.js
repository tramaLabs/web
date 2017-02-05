import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'

import { InitiativeDetailHeader } from 'components'

const InitiativeDetailHeaderContainer = props => <InitiativeDetailHeader {...props} />

const mapDispatchToProps = (dispatch) => ({
  onOpenSharePanelModal: () => dispatch(modalShow('sharePanelModal'))
})

export default connect(undefined, mapDispatchToProps)(InitiativeDetailHeaderContainer)
