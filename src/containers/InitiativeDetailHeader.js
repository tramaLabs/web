import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromEntities, fromUser } from 'store/selectors'
import { initiativeUpdate } from 'store/actions'

import { InitiativeDetailHeader } from 'components'

const InitiativeDetailHeaderContainer = props => <InitiativeDetailHeader {...props} />

InitiativeDetailHeaderContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any
  }).isRequired
}

const mapStateToProps = (state) => ({
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state))
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onTitleChange: title => dispatch(initiativeUpdate.request(initiative.id, { title }))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailHeaderContainer)
