import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { initiativeCreate, fromForm } from 'store'
import { createValidator, required } from 'services/validation'

import { InitiativeCreationForm } from 'components'

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(initiativeCreate.request(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required]
})

const mapStateToProps = (state) => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state)
  }
})

export const config = {
  form: 'InitiativeCreationForm',
  fields: ['title', 'body'],
  destroyOnUnmount: false,
  onSubmit,
  validate
}

export default connect(mapStateToProps)(reduxForm(config)(InitiativeCreationForm))
