import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Button, Alert, Block } from 'components'
import { FacebookLoginButton } from 'containers'

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

const StyledFacebookLoginButton = styled(FacebookLoginButton)`
  margin-top: 15px;
`

const OfferContainer = styled(Block)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content:   flex-start;
  margin-top: 15px;
`

const isDonor = (user, demand) =>
  user && demand.donors.find((u) => u.user.id === user.id)

const OfferForm = ({ connected, user, demand, handleSubmit, submitting, error, reverse }) => {
  if (isDonor(user, demand)) {
    return (
      <StyledButton type="submit" disabled>Já ofereceu</StyledButton>
    )
  } else if (connected) {
    return (
      <Form method="post" onSubmit={handleSubmit}>
        {error && <Alert palette="danger" reverse={reverse}>{error}</Alert>}
        <OfferContainer>
          <Field
            name="quantity"
            type="number"
            minLength={1}
            maxLength={90}
            component={ReduxField}
            reverse={reverse}
          />
          <Button type="submit" disabled={submitting}>Oferecer</Button>
        </OfferContainer>
      </Form>
    )
  }
  return (
    <StyledFacebookLoginButton>Entrar para oferecer</StyledFacebookLoginButton>
  )
}

OfferForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.any,
  }),
  demand: PropTypes.shape({
    id: PropTypes.any,
    donors: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.any,
      }),
    })),
  }).isRequired,
  connected: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.any,
  reverse: PropTypes.bool
}

export default OfferForm
