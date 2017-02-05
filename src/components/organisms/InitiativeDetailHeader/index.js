import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, TagList, IconButton, EditableLine } from 'components'
import { InitiativeJoinButton } from 'containers'

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

const Title = styled.div`
  flex: 1;
  max-width: calc(100% - 1rem);
  @media screen and (max-width: 480px) {
    flex: 1 1 100% !important;
  }
`

const StyledHeading = styled(Heading)`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
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

class InitiativeDetailHeader extends React.Component {
  static propTypes = {
    initiative: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      user: user.isRequired
    }).isRequired,
    reverse: PropTypes.bool,
    onTitleChange: PropTypes.func.isRequired,
    user
  }

  state = {
    editingTitle: false
  }

  beginEditingTitle = () => {
    this.setState({ editingTitle: true })
    this.editableLine.focus()
  }

  submitTitle = () => {
    this.setState({
      editingTitle: false
    })
    this.props.onTitleChange(this.editableLine.getContent())
  }

  isAuthor = () => {
    const { user, initiative } = this.props
    return user && initiative.user.id === user.id
  }

  renderEditableTitle = () => {
    const { initiative, reverse } = this.props
    const { editingTitle } = this.state
    return (
      <EditableHeading>
        <EditableLine
          content={initiative.title}
          onBlur={this.submitTitle}
          handleReturn={this.submitTitle}
          readOnly={!editingTitle}
          ref={editableLine => { this.editableLine = editableLine }}
        />
        {!editingTitle && <IconButton
          icon="edit"
          height={30}
          palette="alpha"
          reverse={reverse}
          onClick={this.beginEditingTitle}
        />}
      </EditableHeading>
    )
  }

  render() {
    const { initiative, user, ...props } = this.props
    return (
      <Wrapper {...props}>
        <Title>
          <StyledHeading palette="grayscale" reverse={props.reverse}>
            {this.isAuthor() ? this.renderEditableTitle() : initiative.title}
          </StyledHeading>
          <TagList tags={initiative.tags} reverse={props.reverse} />
        </Title>
        <InitiativeJoinButton initiative={initiative} />
        <IconButton
          icon="share"
          palette="grayscale"
          breakpoint={840}
          reverse={props.reverse}
          transparent
          responsive
        >
          Compartilhar
        </IconButton>
      </Wrapper>
    )
  }
}

export default InitiativeDetailHeader
