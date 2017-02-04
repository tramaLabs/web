import React from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createSingleLinePlugin from 'draft-js-single-line-plugin'

const singleLinePlugin = createSingleLinePlugin()
const plugins = [singleLinePlugin]

class EditableLine extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
        blockRenderMap={singleLinePlugin.blockRenderMap}
        {...this.props}
      />
    )
  }
}

export default EditableLine
