/* eslint-env browser */
import React from 'react'
import PropTypes from 'prop-types'
import OptimizedEvent from 'components/OptimizedEvent'

import mapState from './mapState'
import Wrapper from './Wrapper'
import Header from './Header'
import PageList from './PageList'

class Navigation extends React.Component {
  static propTypes = {
    setMenuVisibility: PropTypes.func.isRequired,
    toggleMenuVisibility: PropTypes.func.isRequired,
    setCurtainVisibility: PropTypes.func.isRequired,
    toggleCurtainVisibility: PropTypes.func.isRequired,
    setMenuHeight: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    menuHeight: PropTypes.number.isRequired,
    action: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
    title: PropTypes.string,
    activePath: PropTypes.string.isRequired,
  }

  static defaultProps = {
    action: null,
    title: '',
  }

  constructor(props) {
    super(props)
    this.state = { solid: false }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleResize() {
    const { setMenuVisibility, setCurtainVisibility } = this.props
    setMenuVisibility(false)
    setCurtainVisibility(false)
  }

  handleScroll(e) {
    const isSolid = e.currentTarget.pageYOffset !== 0
    const { solid } = this.state
    if (isSolid !== solid) {
      this.setState({ solid: isSolid })
    }
  }

  toggleMenu() {
    const { toggleMenuVisibility, toggleCurtainVisibility } = this.props
    toggleMenuVisibility()
    toggleCurtainVisibility()
  }

  render() {
    const { solid } = this.state
    const {
      isVisible,
      menuHeight,
      setMenuHeight,
      action,
      title,
      activePath,
      push,
    } = this.props
    return (
      <Wrapper solid={solid} isVisible={isVisible} menuHeight={menuHeight}>
        <Header
          action={action}
          isVisible={isVisible}
          toggleMenu={this.toggleMenu}
          title={title}
        />
        <PageList
          isVisible={isVisible}
          setHeight={setMenuHeight}
          activePath={activePath}
          navigateToLink={push}
        />
        <OptimizedEvent event="resize" onEvent={this.handleResize} />
      </Wrapper>
    )
  }
}

export default mapState(Navigation)
