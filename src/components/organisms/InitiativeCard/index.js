import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router'
import { palette } from 'styled-theme'

import { Block, CoverImage, Heading, TagList } from 'components'
import defaultPhoto from './default_small_cover.png'

const Wrapper = styled(Block)`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  font-weight: 300;
  font-style: normal;
  overflow: hidden;
  height: 300px;
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 2;
    background: radial-gradient(
      closest-corner at 50% 20%,
      transparent 0%,
      ${palette('grayscale', 0)} 350%
    );
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

const StyledCoverImage = styled(CoverImage)`
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

const InitiativeCard = ({ initiative, ...props, reverse }) => {
  return (
    <Wrapper palette={initiative.color} {...props}>
      <StyledLink to={`/iniciativas/${initiative.id}/${initiative.slug}`} />
      {<StyledCoverImage src={initiative.photo.small || defaultPhoto} />}
      <Info>
        <StyledHeading level={2} reverse={!reverse}>{initiative.title}</StyledHeading>
        <StyledTagList tags={initiative.tags} reverse={!reverse} limit={2} lines={1} />
      </Info>
    </Wrapper>
  )
}

InitiativeCard.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    palette: PropTypes.string,
    photo: PropTypes.shape({
      small: PropTypes.string
    }).isRequired
  }).isRequired,
  reverse: PropTypes.bool
}

export default InitiativeCard
