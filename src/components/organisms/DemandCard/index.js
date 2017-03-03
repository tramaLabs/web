import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Block, Heading, Paragraph } from 'components'
import { UserList, OfferButton } from 'containers'

const Wrapper = styled(Block)`
  position: relative;
  padding: 21px;
  margin-bottom: 5px;
  border: 1px solid #999999;
  justify-content: center;
  font-weight: 300;
  font-style: normal;
  overflow: hidden;
`

const StyledHeading = styled(Heading)`
  color: #000;
  z-index: 3
  width: 290px;
  margin: 0 0 0.5rem;
  @media screen and (max-width: 400px) {
    width: 200px;
    font-size: 1.5rem;
  }
`

const StyledSpan = styled.span`
    text-transform: uppercase;
    color: white;
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    top: 0;
    right: 0px;
    padding: 13px;
    background-color: #333;
`

const StyledOfferButton = styled(OfferButton)`
    margin-top: 21px;
`

const StyledUserList = styled(UserList)`
    margin-top: 15px;
`

const donorsToUsers = (donors) => {
  const users = []
  donors.map(donor => users.push(donor.user))
  return users
}

const missingNumber = (quantity, donors) => {
  let n = quantity
  donors.map((donor) => (n -= donor.quantity))
  return n
}

const DemandCard = ({ demand, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      <StyledHeading level={4} reverse={!reverse}>{demand.title}</StyledHeading>
      <StyledSpan>faltam {missingNumber(demand.quantity, demand.donors)}</StyledSpan>
      <Paragraph>{demand.description}</Paragraph>
      <StyledUserList reverse={reverse} users={donorsToUsers(demand.donors)} />
      <StyledOfferButton demand={demand} />
    </Wrapper>
  )
}

DemandCard.propTypes = {
  demand: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number,
    donors: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.string,
        picture: PropTypes.string,
        services: PropTypes.shape({
          facebook: PropTypes.string
        }).isRequired
      }),
      quantity: PropTypes.number
    })),
  }).isRequired,
  reverse: PropTypes.bool
}

export default DemandCard
