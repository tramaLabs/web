import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import { colors, fonts } from 'components/globals'
import { LazyImage, Heading, TagList } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-family: ${fonts.primary};
  color: ${colors.grayscale[1]};
  background-color: ${(props) => props.color};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 2;
    background: radial-gradient(closest-corner at 50% 20%, transparent 0%, black 350%);
  }
  &:hover img {
    transform: scale(1.2);
  }
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
`

const StyledLazyImage = styled(LazyImage)`
  position: relative;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 250ms ease-in-out, transform 500ms ease-in-out !important;
`

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
`

const StyledHeading = styled(Heading)`
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.25em;
  z-index: 3
`

const StyledTagList = styled((props) => <TagList {...props} />)`
  > * {
    position: relative;
    z-index: 5;
  }
`

const InitiativeCard = ({ initiative, ...props }) => {
  return (
    <Wrapper color={initiative.color} {...props}>
      <StyledLink to={`/iniciativas/${initiative.id}/${initiative.slug}`} />
      {initiative.photo.small && <StyledLazyImage src={initiative.photo.small} />}
      <Info>
        <StyledHeading level={2} light>{initiative.title}</StyledHeading>
        <StyledTagList tags={initiative.tags} limit={2} lines={1} />
      </Info>
    </Wrapper>
  )
}

InitiativeCard.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    color: PropTypes.string,
    photo: PropTypes.shape({
      small: PropTypes.string
    }).isRequired
  }).isRequired
}

export default InitiativeCard
