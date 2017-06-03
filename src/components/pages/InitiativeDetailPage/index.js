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
    flex-flow: column wrap;
    padding: 34px 5vw;
    box-sizing: border-box;
    > * {
        box-sizing: border-box;
    }
    
    @media only screen and (min-width: 1001px) {
        display: block;
    }
`
const Summary = styled.div`
    order: 1;
    @media only screen and (min-width: 1001px) {
        margin-bottom: 21px;
    }
`
const ForumWrapper = styled.div`
    order: 3;
    @media only screen and (min-width: 1001px) {
        width: calc(100% - 380px - 21px);
    }
`
const StyledInitiativeDemandBoard = styled((props) => <InitiativeDemandBoard {...props} />)`
    order: 2;
    width: 100%;
    margin-bottom: 55px;
                                           
    @media only screen and (min-width: 500px) {
        width: 380px;
    }
    @media only screen and (min-width: 1001px) {
        float: right;
        margin-left: 21px;
        margin-bottom: 0px;
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
        {initiative && <StyledInitiativeDemandBoard user={user} initiative={initiative} />}
        
        <Summary>
          {initiative && <InitiativeDetailDescription initiative={initiative} />}
        </Summary>
        
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
