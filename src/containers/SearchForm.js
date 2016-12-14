import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import { SearchForm } from 'components'

class SearchFormContainer extends Component {
  render () {
    return <SearchForm {...this.props} />
  }
}

const onSubmit = ({ q }, dispatch) => dispatch(push('/iniciativas', { q }))

export const config = {
  form: 'SearchForm',
  destroyOnUnmount: false,
  onSubmit
}

export default reduxForm(config)(SearchFormContainer)
