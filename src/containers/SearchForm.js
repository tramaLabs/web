import React from 'react'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import { SearchForm } from 'components'

const SearchFormContainer = props => <SearchForm {...props} />

const onSubmit = ({ q }, dispatch) => dispatch(push('/iniciativas', { q }))

export const config = {
  form: 'SearchForm',
  destroyOnUnmount: false,
  onSubmit
}

export default reduxForm(config)(SearchFormContainer)
