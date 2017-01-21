import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromStatus, fromUser, fromEntities } from 'store/selectors'
import { initiativeJoin, initiativeLeave, INITIATIVE_JOIN, INITIATIVE_LEAVE } from 'store/actions'

import { InitiativeJoinButton } from 'components'

const InitiativeJoinButtonContainer = props => <InitiativeJoinButton {...props} />

InitiativeJoinButtonContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any
  }).isRequired
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, [INITIATIVE_JOIN, INITIATIVE_LEAVE]),
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onJoin: () => dispatch(initiativeJoin.request(initiative.id)),
  onLeave: () => dispatch(initiativeLeave.request(initiative.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeJoinButtonContainer)
