import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'


import TagsInput from 'react-tagsinput'


const StyledTagsInput = styled(TagsInput)`
  .react-tagsinput {
  background-color: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}

.react-tagsinput--focused {
  border-color: #a5d24a;
}

.react-tagsinput-tag {
  background-color: ${palette(0, 'grayscale')};
  border: 1px solid ${palette(0, 'grayscale')};
  color: ${palette(0, true, 'grayscale')};
  display: inline-block;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px;
}

.react-tagsinput-remove {
  cursor: pointer;
  font-weight: bold;
}

.react-tagsinput-tag a::before {
  content: " ×";
}

.react-tagsinput-input {
  background: transparent;
  border: 0;
  color: #777;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 6px;
  margin-top: 1px;
  outline: none;
  padding: 5px;
  width: 80px;
}
`

class Tags extends React.Component {
  constructor() {
    super()
    this.state = { tags: [] }
  }

  handleChange = (tags) => {
    this.setState({ tags })
  }

  render() {
    return <StyledTagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}


export default Tags
