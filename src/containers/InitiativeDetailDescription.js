import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromEntities, fromUser } from 'store/selectors'
import { initiativeUpdate } from 'store/actions'

import { InitiativeDetailDescription } from 'components'

const InitiativeDetailDescriptionContainer = props => <InitiativeDetailDescription {...props} />

InitiativeDetailDescriptionContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any
  }).isRequired
}

const mapStateToProps = (state) => ({
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onDescriptionChange: description => dispatch(initiativeUpdate.request(initiative.id, { description }))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailDescriptionContainer)
