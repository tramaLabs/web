import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Button, Alert, Link } from 'components'
import FacebookLoginButton from 'containers/FacebookLoginButton'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`

const InitiativeCreationForm = ({ connected, handleSubmit, submitting, error }) => {
  return (
    <Form method="post" onSubmit={handleSubmit}>
      {error && <Alert kind="danger">{error}</Alert>}
      <Field name="_csrf" type="hidden" component="input" />
      <Field
        name="title"
        label="Título"
        placeholder="ex: Aula de violão na praia"
        maxLength={120}
        component={ReduxField} />
      <Field
        name="description"
        label="Proposta"
        placeholder="Escreva aqui os detalhes da sua iniciativa"
        type="textarea"
        rows={8}
        maxLength={2048}
        component={ReduxField} />
      <Alert>
        Ao criar uma iniciativa você concorda com os <Link to="/termos">Termos de Uso</Link>.
      </Alert>
      {connected && <Button type="submit" disabled={submitting}>Criar iniciativa</Button>}
      {connected ||
        <Alert left={<FacebookLoginButton />}>
          Você precisa estar conectado para criar uma iniciativa
        </Alert>
      }
    </Form>
  )
}

InitiativeCreationForm.propTypes = {
  connected: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.any
}

export default InitiativeCreationForm
