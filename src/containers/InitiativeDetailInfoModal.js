import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { fromUser } from 'store/selectors'
import { initiativeUpdate } from 'store/actions'
import { createValidator, maxLength } from 'services/validation'

import { InitiativeDetailInfoModal } from 'components'

const InitiativeDetailInfoModalContainer = props => <InitiativeDetailInfoModal {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(initiativeUpdate.request(data.initiative.id, data, resolve, reject))
}).catch((error) => {
  console.log(error)
  if (error.status === 401) {
    throw new SubmissionError({ _error: 'Você precisa estar conectado para editar uma iniciativa' })
  }
  throw new SubmissionError({
    _error: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
  })
})

const validate = createValidator({
  summary: [maxLength(500)],
})

const mapStateToProps = (state, ownProps) => ({
  connected: !!fromUser.getCurrentDetail(state),
  initialValues: {
    initiative: ownProps.initiative,
    title: ownProps.initiative.title,
    description: ownProps.initiative.description,
    summary: ownProps.initiative.summary
  }
})

InitiativeDetailInfoModalContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any,
  })
}

export default connect(mapStateToProps)(reduxForm({
  form: 'InitiativeDetailInfoModal',
  onSubmit,
  validate
})(InitiativeDetailInfoModalContainer))
