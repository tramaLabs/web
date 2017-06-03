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
    position: relative;
    width: 100%;
    max-width: calc(${key('sizes.maxWidth')} + 2rem);
    margin: 0 auto;
    padding: 2rem 0;
    box-sizing: border-box;
    > * {
        margin: 1rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 5vw;
    > * {
        margin: 1rem 0;
    }
}
`
const Summary = styled.div`
    width: calc(100% - 380px - 8rem);
    @media only screen and (max-width: 1000px) {
        width: 100%;    
    }
`
const ForumWrapper = styled.div`
    width: calc(100% - 380px - 8rem);
    @media only screen and (max-width: 1000px) {
        width: 100%;    
    }
`
const StyledInitiativeDemandBoard = styled((props) => <InitiativeDemandBoard {...props} />)`
    width: 380px;
    position: absolute;
    top: 0;
    right: 0;
    @media only screen and (max-width: 1000px) {
        position: relative;
        top: auto;
        right: auto;
        margin-bottom: 55px;
    }
    @media only screen and (max-width: 500px) {
        width: 100%;
        padding: 0 !important;
    }                                
`

const InitiativeDetailPage = ({ initiative, user }) => {
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
              { property: 'og:site_name', content: initiative && initiative.title },
              { property: 'og:image', content: initiative && (initiative.photo.medium) },
              { property: 'og:image:type', content: 'image/png' },
          ]}
        />
        <Summary>
          {initiative && <InitiativeDetailDescription initiative={initiative} />}
        </Summary>
        {initiative && <StyledInitiativeDemandBoard user={user} initiative={initiative} />}
        <ForumWrapper>
            <Forum />
        </ForumWrapper>
      </InnerWrapper>
      
    </PageTemplate>
  )
}

InitiativeDetailPage.propTypes = {
  initiative: PropTypes.object,
  user: PropTypes.shape({
    id: PropTypes.any
  })
}

export default InitiativeDetailPage
