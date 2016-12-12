import { connect } from 'react-redux'
import {
  initiativeJoin,
  initiativeLeave,
  fromStatus,
  fromInitiative,
  fromUser,
  fromEntities,
  INITIATIVE_JOIN,
  INITIATIVE_LEAVE
} from 'store'

import InitiativeJoinButton from 'components/organisms/InitiativeJoinButton'

const mapStateToProps = (state, { initiative }) => ({
  loading: fromStatus.isLoading(state, [INITIATIVE_JOIN, INITIATIVE_LEAVE]),
  initiative: initiative || fromEntities.getInitiative(state, fromInitiative.getId(state)),
  user: fromEntities.getUser(state, fromUser.getCurrentId(state))
})

const mapDispatchToProps = (dispatch) => ({
  onJoin: (id) => dispatch(initiativeJoin.request(id)),
  onLeave: (id) => dispatch(initiativeLeave.request(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeJoinButton)
