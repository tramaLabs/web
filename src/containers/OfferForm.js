import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromUser, fromEntities } from 'store/selectors'
import { initiativeDonorsUpdate } from 'store/actions'
import { reduxForm, SubmissionError } from 'redux-form'
import { createValidator, required, minLength, maxLength } from 'services/validation'

import { OfferForm } from 'components'

const OfferFormContainer = props => <OfferForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(initiativeDonorsUpdate.request(data, resolve, reject))
}).catch((error) => {
  if (error.status === 401) {
    throw new SubmissionError({ _error: 'Você precisa estar conectado para oferecer' })
  }
  console.log(error)
  throw new SubmissionError({
    _error: 'O servidor está instável. Por favor, tente novamente mais tarde.'
  })
})

const validate = createValidator({
  quantity: [required, minLength(1), maxLength(90)],
})

const mapStateToProps = (state, ownProps) => ({
  connected: !!fromUser.getCurrentDetail(state),
  user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state)),
  initialValues: {
    user: fromEntities.getDetail(state, 'user', fromUser.getCurrentDetail(state)),
    demand: ownProps.demand,
    initiative: ownProps.initiative,
  }
})

OfferFormContainer.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any,
  }),
  demand: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps)(reduxForm({
  form: 'OfferFormContainer',
  onSubmit,
  validate,
})(OfferFormContainer))
