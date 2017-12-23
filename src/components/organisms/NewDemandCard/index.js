import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReduxField, Button, Alert, Block } from 'components'
import { Field } from 'redux-form'

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const Wrapper = styled(Block)`
  position: relative;
  padding: 21px;
  margin-bottom: 5px;
  border: 1px solid #999999;
  justify-content: center;
  font-weight: 300;
  font-style: normal;
  overflow: hidden;
`

const NewDemandCard = ({ handleSubmit, submitting, error, reverse }) => {
  return (
    <Wrapper>
      <Form method="post" onSubmit={handleSubmit}>
        {error && <Alert palette="danger" reverse={reverse}>{error}</Alert>}
        <Field
          name="title"
          label="Título"
          type="text"
          minLength={1}
          maxLength={100}
          component={ReduxField}
          reverse={reverse}
        />
        <Field
          name="description"
          label="Proposta"
          placeholder="Escreva aqui os detalhes da sua demanda"
          type="textarea"
          rows={2}
          maxLength={400}
          component={ReduxField}
          reverse={reverse}
        />
        <Field
          name="quantity"
          label="Quantidade"
          type="number"
          minLength={1}
          maxLength={90}
          component={ReduxField}
          reverse={reverse}
        />
        <Button type="submit" disabled={submitting}>Adicionar</Button>
      </Form>
    </Wrapper>
  )
}

NewDemandCard.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any,
  }).isRequired,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.any,
  reverse: PropTypes.bool
}

export default NewDemandCard
