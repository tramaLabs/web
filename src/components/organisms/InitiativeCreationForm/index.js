import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Button, Alert, Link } from 'components'
import { FacebookLoginButton } from 'containers'

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const InitiativeCreationForm = ({ connected, handleSubmit, submitting, error, reverse }) => {
  return (
    <Form method="post" onSubmit={handleSubmit}>
      {error && <Alert palette="danger" reverse={reverse}>{error}</Alert>}
      <Field
        name="title"
        label="Título"
        placeholder="ex: Aula de violão na praia"
        maxLength={120}
        component={ReduxField}
        reverse={reverse}
      />
      <Field
        name="description"
        label="Proposta"
        placeholder="Escreva aqui os detalhes da sua iniciativa"
        type="textarea"
        rows={8}
        maxLength={2048}
        component={ReduxField}
        reverse={reverse}
      />
      <Alert>
        Ao criar uma iniciativa você concorda com os <Link to="/termos">Termos de Uso</Link>.
      </Alert>
      {connected && <Button type="submit" disabled={submitting}>Criar iniciativa</Button>}
      {connected || <FacebookLoginButton>Entrar para criar iniciativa</FacebookLoginButton>}
    </Form>
  )
}

InitiativeCreationForm.propTypes = {
  connected: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.any,
  reverse: PropTypes.bool
}

export default InitiativeCreationForm
