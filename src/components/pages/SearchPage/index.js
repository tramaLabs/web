import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'


import { Header, Footer, PageTemplate, Heading, InitiativeCardList } from 'components'
import { SearchForm } from 'containers'

const StyledHeading = styled(Heading)`
  margin: 3rem 1rem 1rem;
`

const StyledSearchForm = styled(props => <SearchForm {...props} />)`
  flex: 1;
  margin: 0 2rem;
  color: ${palette('grayscale', 0)};
  transition: opacity 250ms ease-in-out;
  @media screen and (max-width: 640px) {
    margin: 0;
`

const SearchPage = ({ initiatives }) => {
  return (
    <PageTemplate
      header={<Header id="header" hideSearch />}
      footer={<Footer />}
    >
      <StyledHeading level={2}>Encontre Iniciativas Para Colaborar</StyledHeading>
      <StyledSearchForm palette="grayscale" />
      <InitiativeCardList initiatives={initiatives} />
    </PageTemplate>
  )
}


SearchPage.propTypes = {
  initiatives: PropTypes.array
}


export default SearchPage
