import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { key, palette } from 'styled-theme'

import { Caption, Paragraph, InitiativeDetailUser, IconButton } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
`

const SummaryEditionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

const StyledEditButton = styled(IconButton)`
  margin-top: -8px;  position: absolute;
  right: 0;
  top: 0;
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(${key('sizes.maxWidth')} + 2rem);
  margin: 0 auto;
  padding: 2rem 0;
  box-sizing: border-box;
  > * {
    margin: 1rem;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    > * {
      width: auto;
      flex: 1 1 100%;
    }
  }
`

const Summary = styled.div`
  flex: 1;
`

const SummaryParagraph = styled(Paragraph)`
  margin: 0;
`

const StyledInitiativeDetailUser = styled((props) => <InitiativeDetailUser {...props} />)`
  width: 320px;
`

const InitiativeDetailInfo = ({ initiative, modalTitle, onOpenInitiativeDetailInfoModal, modalName, ...props, palette, reverse }) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Summary>
          <Caption reverse={reverse}>Resumo</Caption>
          <SummaryParagraph reverse={reverse}>{initiative.summary}</SummaryParagraph>
        </Summary>
        <StyledInitiativeDetailUser initiative={initiative} reverse={reverse} />
      </InnerWrapper>
    </Wrapper>
  )
}

InitiativeDetailInfo.propTypes = {
  initiative: PropTypes.shape({
    id: PropTypes.any.isRequired,
    summary: PropTypes.string
  }).isRequired,
  palette: PropTypes.string,
  onOpenInitiativeDetailInfoModal: PropTypes.func,
  modalTitle: PropTypes.string,
  modalName: PropTypes.string,
  reverse: PropTypes.bool
}

export default InitiativeDetailInfo
