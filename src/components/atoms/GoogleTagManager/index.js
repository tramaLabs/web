import React from 'react'
import gtmParts from 'react-google-tag-manager'

class GoogleTagManager extends React.Component {
  componentDidMount() {
    const dataLayerName = this.props.dataLayerName || 'dataLayer'
    const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm'

    if (!window[dataLayerName]) {
      const gtmScriptNode = document.getElementById(scriptId)
      // eslint-disable-next-line no-eval
      eval(gtmScriptNode.textContent)
    }
  }

  render() {
    const gtm = gtmParts({
      id: this.props.gtmId,
      dataLayerName: this.props.dataLayerName || 'dataLayer',
      additionalEvents: this.props.additionalEvents || {}
    })

    return (
      <div>
        <div>{gtm.noScriptAsReact()}</div>
        <div id={this.props.scriptId || 'react-google-tag-manager-gtm'}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    )
  }
}

GoogleTagManager.propTypes = {
  gtmId: React.PropTypes.string.isRequired,
  dataLayerName: React.PropTypes.string,
  additionalEvents: React.PropTypes.object,
  scriptId: React.PropTypes.string
}

export default GoogleTagManager
