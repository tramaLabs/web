import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import SearchForm from 'components/organisms/SearchForm'

const onSubmit = ({ q }, dispatch) => dispatch(push('/iniciativas', { q }))

export const config = {
  form: 'SearchForm',
  destroyOnUnmount: false,
  onSubmit
}

export default reduxForm(config)(SearchForm)
