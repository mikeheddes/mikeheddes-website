/* eslint-env browser */
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class OptimizedEvent extends Component {
  static propTypes = {
    event: PropTypes.string.isRequired,
    onEvent: PropTypes.func.isRequired,
    target: PropTypes.oneOf(['window', 'document']),
  }

  static defaultProps = {
    target: 'window',
  }

  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
    this.updating = false
  }

  componentDidMount() {
    const { event, target } = this.props
    const obj = target === 'window' ? window : document
    obj.addEventListener(event, this.handleEvent)
  }

  componentDidUpdate(prevProps) {
    const { event, target } = this.props

    if (target !== prevProps.target || event !== prevProps.event) {
      const prevObj = prevProps.target === 'window' ? window : document
      prevObj.removeEventListener(prevProps.event, this.handleEvent)

      const obj = target === 'window' ? window : document
      obj.addEventListener(event, this.handleEvent)
    }
  }

  componentWillUnmount() {
    const { event, target } = this.props
    const obj = target === 'window' ? window : document
    obj.removeEventListener(event, this.handleEvent)
  }

  handleEvent(e) {
    if (this.updating) return
    this.updating = true
    const { onEvent } = this.props

    requestAnimationFrame(() => {
      onEvent(e)
      this.updating = false
    })
  }

  render() {
    return null
  }
}
