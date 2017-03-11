import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromUser } from 'store/selectors'
import { initiativeDemandsUpdate } from 'store/actions'
import { reduxForm, SubmissionError } from 'redux-form'
import { createValidator, required, minLength, maxLength } from 'services/validation'

import { NewDemandCard } from 'components'

const NewDemandCardContainer = props => <NewDemandCard {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  console.log('onSubmit data: ', data)
  console.log('Dispatch: ', dispatch)
  dispatch(initiativeDemandsUpdate.request(data, resolve, reject))
}).catch((error) => {
  console.log('Erro ao mandar nova demanda: ', error)
  if (error.status === 401) {
    throw new SubmissionError({ _error: 'Você precisa estar conectado para oferecer' })
  }

  throw new SubmissionError({
    _error: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
  })
})

const validate = createValidator({
  title: [required, minLength(1), maxLength(100)],
})

const mapStateToProps = (state, ownProps) => ({
  connected: !!fromUser.getCurrentDetail(state),
  initialValues: {
    initiative: ownProps.initiative,
  }
})

NewDemandCardContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any,
  })
}

export default connect(mapStateToProps)(reduxForm({
  form: 'NewDemandCardContainer',
  onSubmit,
  validate,
})(NewDemandCardContainer))
