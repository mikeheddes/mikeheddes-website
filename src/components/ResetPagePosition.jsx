/* eslint-env browser */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class ResetPagePosition extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (location.pathname !== nextProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

export default withRouter(ResetPagePosition)
