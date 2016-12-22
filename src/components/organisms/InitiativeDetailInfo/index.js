import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { reverseColors, breakpoints } from 'components/globals'
import { Caption, Paragraph, InitiativeDetailUser } from 'components'

const Wrapper = styled.div`
  background-color: ${reverseColors.grayscale[1]};
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(${breakpoints.maxWidth} + 2rem);
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

const InitiativeDetailInfo = ({ initiative, ...props }) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Summary>
          <Caption>Resumo</Caption>
          <SummaryParagraph>{initiative.summary}</SummaryParagraph>
        </Summary>
        <StyledInitiativeDetailUser initiative={initiative} />
      </InnerWrapper>
    </Wrapper>
  )
}

InitiativeDetailInfo.propTypes = {
  initiative: PropTypes.shape({
    summary: PropTypes.string
  }).isRequired
}

export default InitiativeDetailInfo
