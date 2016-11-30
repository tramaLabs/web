import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { ReduxField, Button } from 'components'

const Form = styled.form`
  display: flex;
  padding: 0.25rem;
  & > :first-child {
    flex: 1;
  }
  & > * {
    margin: 0.25rem;
  }
`

const SearchForm = ({ handleSubmit, borderless, kind, transparent, light, ...props }) => {
  return (
    <Form method="get" action="/iniciativas" onSubmit={handleSubmit} {...props}>
      <Field
        name="q"
        type="search"
        placeholder="Use tags para pesquisar (ex: música, rio de janeiro)"
        borderless={borderless}
        component={ReduxField} />
      <Button
        type="submit"
        kind={kind}
        transparent={transparent}
        light={light}>
        Pesquisar
      </Button>
    </Form>
  )
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  borderless: PropTypes.bool,
  kind: PropTypes.oneOf(Object.keys(colors)),
  transparent: PropTypes.bool,
  light: PropTypes.bool
}

export default SearchForm
