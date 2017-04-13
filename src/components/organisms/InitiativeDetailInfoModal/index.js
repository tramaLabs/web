import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { ReduxField, Alert, Button } from 'components'
import { Modal, FacebookLoginButton } from 'containers'

const SubmitWrapper = styled.div`
  margin-top: 20px;
`

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const StyledField = styled(Field)`
 width: 100%;
`

const StyledModal = styled(Modal)`
  width: 100%;
`

const InitiativeDetailInfoModal = ({ connected, handleSubmit, initiative, title, ...props, submitting,
error, reverse }) => {
  return (
    <Modal
      title={`${title}`}
      name="initiativeEdition"
      closeable
      {...props}
    >
      <Form method="post" onSubmit={handleSubmit}>
        {error && <Alert palette="danger" reverse={reverse}>{error}</Alert>}
        <StyledField
          name="title"
          label="Título"
          placeholder="Escreva aqui o título da sua iniciativa"
          type="textarea"
          rows={1}
          maxLength={120}
          component={ReduxField}
          reverse={reverse}
          value={initiative.title}
        />
        <StyledField
          name="summary"
          label="Resumo"
          placeholder="Escreva aqui o resumo da sua iniciativa"
          type="textarea"
          rows={6}
          maxLength={500}
          component={ReduxField}
          reverse={reverse}
          value={initiative.summary}
        />
        <StyledField
          name="description"
          label="Descrição"
          placeholder="Escreva aqui uma descrição para sua iniciativa"
          type="textarea"
          rows={10}
          maxLength={2048}
          component={ReduxField}
          reverse={reverse}
          value={initiative.description}
        />
        <SubmitWrapper>
          {connected && <Button type="submit" disabled={submitting}>Editar iniciativa</Button>}
          {connected || <FacebookLoginButton>Entrar para editar iniciativa</FacebookLoginButton>}
        </SubmitWrapper>
      </Form>
    </Modal>
  )
}

InitiativeDetailInfoModal.propTypes = {
  connected: PropTypes.bool,
  initiative: PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  title: PropTypes.string,
  error: PropTypes.any,
  reverse: PropTypes.bool
}

export default InitiativeDetailInfoModal
