import React, { PropTypes } from 'react'
import { EditorState, ContentState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createSingleLinePlugin from 'draft-js-single-line-plugin'

const singleLinePlugin = createSingleLinePlugin()
const plugins = [singleLinePlugin]

class EditableLine extends React.Component {
  static propTypes = {
    content: PropTypes.string
  }

  state = {
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    const { content } = this.props
    if (content) {
      this.onChange(EditorState.createWithContent(ContentState.createFromText(content)))
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  getContent() {
    const { editorState } = this.state
    return editorState.getCurrentContent().getPlainText()
  }

  focus() {
    this.editor.focus()
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
        blockRenderMap={singleLinePlugin.blockRenderMap}
        ref={editor => { this.editor = editor }}
        {...this.props}
      />
    )
  }
}

export default EditableLine
