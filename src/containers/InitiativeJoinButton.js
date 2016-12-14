import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus, fromUser, fromEntities } from 'store/selectors'
import { initiativeJoin, initiativeLeave, INITIATIVE_JOIN, INITIATIVE_LEAVE } from 'store/actions'

import { InitiativeJoinButton } from 'components'

class InitiativeJoinButtonContainer extends Component {
  static propTypes = {
    initiative: PropTypes.shape({
      id: PropTypes.any
    }).isRequired
  }

  render () {
    return <InitiativeJoinButton {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state, [INITIATIVE_JOIN, INITIATIVE_LEAVE]),
  user: fromEntities.getUser(state, fromUser.getCurrentId(state))
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onJoin: () => dispatch(initiativeJoin.request(initiative.id)),
  onLeave: () => dispatch(initiativeLeave.request(initiative.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeJoinButtonContainer)
