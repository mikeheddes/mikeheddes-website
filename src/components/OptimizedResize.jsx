import { Component } from 'react'
import PropTypes from 'prop-types'

export default class OptimizedResize extends Component {
  static propTypes = {
    onResize: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
    this.updating = false
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleEvent)
  }

  handleEvent(e) {
    if (this.updating) return
    this.updating = true
    const { onResize } = this.props

    requestAnimationFrame(() => {
      onResize(e)
      this.updating = false
    })
  }

  render() {
    return null
  }
}
