import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

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
  & > button {
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

const SearchForm = ({ handleSubmit, palette, transparent, reverse, ...props }) => {
  return (
    <Form method="get" action="/iniciativas" onSubmit={handleSubmit} {...props}>
      <Field
        name="q"
        type="search"
        placeholder="Use tags para pesquisar (ex: música, rio de janeiro)"
        component={ReduxField}
        borderless={reverse}
        {...props}
      />
      <Button
        type="submit"
        palette={palette}
        transparent={transparent}
        reverse={reverse}
      >
        Explorar
      </Button>
    </Form>
  )
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool
}

export default SearchForm
