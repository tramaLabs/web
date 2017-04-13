import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from 'store/actions'
import { fromUser, fromEntities } from 'store/selectors'


import { InitiativeDetailHeader } from 'components'

const InitiativeDetailHeaderContainer = props => <InitiativeDetailHeader {...props} />

const mapDispatchToProps = (dispatch, { editionModalName }) => ({
  onOpenSharePanelModal: () => dispatch(modalShow('sharePanelModal')),
  onOpenInitiativeDetailInfoModal: () => dispatch(modalShow(editionModalName))

})

const mapStateToProps = (state) => ({
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})


export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailHeaderContainer)
