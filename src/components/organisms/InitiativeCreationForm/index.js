import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Button, Feedback } from 'components'
import FacebookLoginButton from 'containers/FacebookLoginButton'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`

const InitiativeCreationForm = ({ connected, handleSubmit, submitting, error }) => {
  return (
    <Form method="post" onSubmit={handleSubmit}>
      {error && <Feedback kind="danger">{error}</Feedback>}
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
      {connected && <Button type="submit" disabled={submitting}>Criar iniciativa</Button>}
      {connected ||
        <Feedback left={<FacebookLoginButton />}>
          Você precisa estar conectado para criar uma iniciativa
        </Feedback>
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
