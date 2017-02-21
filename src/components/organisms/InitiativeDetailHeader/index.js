import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, TagList, IconButton, SharePanelModal } from 'components'
import { InitiativeJoinButton } from 'containers'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  & > * {
    margin: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    & > * {
      flex: 1;
    }
  }
`

const Title = styled.div`
  flex: 1;
  max-width: calc(100% - 1rem);
  @media screen and (max-width: 480px) {
    flex: 1 1 100% !important;
  }
`

const StyledHeading = styled(Heading)`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const InitiativeDetailHeader = ({ initiative, onOpenSharePanelModal, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <Title>
        <StyledHeading palette="grayscale" reverse={reverse}>{initiative.title}</StyledHeading>
        <TagList tags={initiative.tags} reverse={reverse} />
      </Title>
      <InitiativeJoinButton initiative={initiative} />
      <IconButton
        icon="share"
        palette="grayscale"
        breakpoint={840}
        reverse={reverse}
        transparent
        responsive
        onClick={onOpenSharePanelModal}

      >
        Compartilhar

      </IconButton>
      <SharePanelModal initiative={initiative} />

    </Wrapper>
  )
}

InitiativeDetailHeader.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
  }).isRequired,
  onOpenSharePanelModal: PropTypes.func,
  reverse: PropTypes.bool
}

export default InitiativeDetailHeader
