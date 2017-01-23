import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { TagLink } from 'components'

const Wrapper = styled.div`
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
  }
`

const TagList = ({ reverse, ...props, tags, limit }) => {
  return (
    <Wrapper {...props}>
      {tags.slice(0, limit).map(tag =>
        <TagLink key={tag.id} reverse={reverse}>{tag.name}</TagLink>
      )}
    </Wrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  limit: PropTypes.number,
  lines: PropTypes.number,
  reverse: PropTypes.bool
}

TagList.defaultProps = {
  limit: 6,
  lines: 2
}

export default TagList
