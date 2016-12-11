import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { TagLink } from 'components'

const Wrapper = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  & > * {
    padding: 0.25rem;
    max-width: ${({ tags, limit, lines }) =>
      `calc(100% / ${limit > tags.length ? tags.length : limit} * ${lines})`
    };
    box-sizing: border-box;
    @media screen and (max-width: 420px) {
      display: none;
    }
  }
`

const TagList = ({ ...props, tags, limit }) => {
  return (
    <Wrapper {...props}>
      {tags.slice(0, limit).map((tag, key) =>
        <TagLink key={key}>{tag.name}</TagLink>
      )}
    </Wrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  limit: PropTypes.number,
  lines: PropTypes.number
}

TagList.defaultProps = {
  limit: 6,
  lines: 2
}

export default TagList
