import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import {
  PageTemplate,
  Footer,
  Header,
  InitiativeDetailHero,
  InitiativeDetailDescription,
  Forum,
  InitiativeDemandBoard
} from 'components'
import Helmet from 'react-helmet'

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

const StyledInitiativeDemandBoard = styled((props) => <InitiativeDemandBoard {...props} />)`
  width: 380px;
`

const InitiativeDetailPage = ({ initiative }) => {
  return (
    <PageTemplate
      header={<Header scrollsTranslucid />}
      hero={initiative && <InitiativeDetailHero initiative={initiative} />}
      footer={<Footer />}
    >
      <InnerWrapper>
        <Helmet
          title="Trama"
          meta={[
              { name: 'description', content: initiative && initiative.description },
              { property: 'og:site_name', content: 'Trama' },
              { property: 'og:image', content: initiative && initiative.picture },
              { property: 'og:image:type', content: 'image/png' },
          ]}
        />
        <Summary>
          {initiative && <InitiativeDetailDescription initiative={initiative} />}
        </Summary>
        <StyledInitiativeDemandBoard initiative={initiative} />
      </InnerWrapper>
      <Forum />
    </PageTemplate>
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.object
}

export default InitiativeDetailPage
