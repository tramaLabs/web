import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DemandCard, Heading, Button, Paragraph } from 'components'
import { NewDemandCard } from 'containers'

const Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

class InitiativeDemandBoard extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.any
    }),
    initiative: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      demands: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      }))
    }).isRequired,
    reverse: PropTypes.bool
  }

  state = {
    addingDemand: false
  }

  onAddDemand = () =>
    this.setState({ addingDemand: !this.state.addingDemand })

  isAuthor = (user, initiative) =>
    user && initiative.user.id === user.id

  render() {
    const { initiative, user, reverse, ...props } = this.props
    return (
      <Wrapper {...props}>
        {initiative.demands.length > 0 &&
          <Heading level={4}>{initiative.title} precisa de:</Heading>
        }
        { initiative.demands.map(demand =>
          <DemandCard key={demand.id} initiative={initiative} demand={demand} reverse={reverse} />
        )}
        {this.isAuthor(user, initiative) && initiative.demands.length < 1 &&
          <Paragraph>Com demandas você pode registrar tudo o que sua iniciativa precisa para acontecer</Paragraph>
        }
        {!this.state.addingDemand && this.isAuthor(user, initiative) && <StyledButton type="button" onClick={this.onAddDemand}>Adicionar Demanda</StyledButton>}
        { this.state.addingDemand && <NewDemandCard key="new_demand" initiative={initiative} reverse={reverse} />}
      </Wrapper>
    )
  }
}


export default InitiativeDemandBoard
