import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { EditableLine, IconButton } from 'components'


const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  & > * {
    margin: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    & > * {
      flex: 1;
    }
  }
`


const EditableHeading = styled.span`
  display: flex;
  align-items: center;
  > *:first-child {
    margin-right: 0.5rem;
  }
  button {
    display: none;
  }
  &:hover button {
    display: block;
  }
`

const user = PropTypes.shape({
  id: PropTypes.any.isRequired
})

class InitiativeDetailDescription extends React.Component {
  static propTypes = {
    initiative: PropTypes.shape({
      description: PropTypes.string.isRequired,
      user: user.isRequired
    }).isRequired,
    reverse: PropTypes.bool,
    onDescriptionChange: PropTypes.func.isRequired,
    user
  }

  state = {
    editing: false
  }

  beginEditing = () => {
    this.setState({ editing: true })
    this.editableLine.focus()
  }

  submit = () => {
    this.setState({
      editing: false
    })
    this.props.onDescriptionChange(this.editableLine.getContent())
  }

  isAuthor = () => {
    const { user, initiative } = this.props
    return user && initiative.user.id === user.id
  }

  renderEditableDescription = () => {
    const { initiative, reverse } = this.props
    const { editing } = this.state
    return (
      <EditableHeading>
        <EditableLine
          content={initiative.description}
          onBlur={this.submitDescription}
          handleReturn={this.submitDescription}
          readOnly={!editing}
          ref={editableLine => { this.editableLine = editableLine }}
        />
        {!editing && <IconButton
          icon="edit"
          height={30}
          palette="alpha"
          reverse={reverse}
          onClick={this.beginEditing}
        />}
      </EditableHeading>
    )
  }

  render() {
    const { initiative, user, ...props } = this.props
    return (
      <Wrapper {...props}>

        {this.isAuthor() ? this.renderEditableDescription() : initiative.description}

      </Wrapper>
    )
  }
}

export default InitiativeDetailDescription
