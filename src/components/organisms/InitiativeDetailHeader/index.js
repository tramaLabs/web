import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, TagList, IconButton, SharePanelModal } from 'components'
import { InitiativeJoinButton, InitiativeDetailInfoModal } from 'containers'


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

const StyledEditButton = styled(IconButton)`
  margin-top: -8px;  position: absolute;
  right: 0;
  top: 0;
`

const InitiativeDetailHeader = ({ initiative, editionModalName, onOpenSharePanelModal, onOpenInitiativeDetailInfoModal, ...props, palette, reverse }) => {
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
      <StyledEditButton
        icon="edit"
        height={32}
        palette={palette}
        reverse={!reverse}
        responsive
        collapsed
        onClick={onOpenInitiativeDetailInfoModal}
      >
              Editar iniciativa
            </StyledEditButton>
      <InitiativeDetailInfoModal name={editionModalName} title={'Edite sua iniciativa'} initiative={initiative} />

    </Wrapper>
  )
}

InitiativeDetailHeader.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
  }).isRequired,
  editionModalName: PropTypes.string,
  onOpenSharePanelModal: PropTypes.func,
  onOpenInitiativeDetailInfoModal: PropTypes.func,
  palette: PropTypes.any,
  reverse: PropTypes.bool
}

export default InitiativeDetailHeader
