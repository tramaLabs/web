import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, Entity } from 'draft-js'

import { Button, Paragraph } from 'components'

class RichTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.handleChange(newState)
      return true
    }
    return false
  }

  handleBoldClick = () => {
    this.refs.editor.focus()
    this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  lol = (block) => {
    return {
      component: ({ blockProps }) => <Paragraph {...blockProps} />,
      props: {
        children: block.getText()
      }
    }
  }

  render () {
    return (
      <div>
        <Button onClick={this.handleBoldClick}>Bold</Button>
        <Editor
          ref="editor"
          placeholder="loler"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default RichTextEditor
