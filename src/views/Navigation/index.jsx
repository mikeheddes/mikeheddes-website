/* eslint-env browser */
import React from 'react'
import PropTypes from 'prop-types'

import OptimizedResize from '../../components/OptimizedResize'
import Curtain from '../../components/Curtain'

import Wrapper from './Wrapper'
import Header from './Header'
import PageList from './PageList'

class Navigation extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    action: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    action: null,
    title: 'Mike Heddes',
  }

  state = {
    isSolid: false,
    isOpen: false,
    listHeight: 1,
  }

  list = React.createRef()

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.setHeight = this.setHeight.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  setHeight() {
    const newHeight = this.list.current.offsetHeight
    const { listHeight } = this.state
    if (newHeight !== listHeight) {
      this.setState({ listHeight: newHeight })
    }
  }

  handleScroll(e) {
    const willBeSolid = e.currentTarget.pageYOffset !== 0
    const { isSolid } = this.state
    if (willBeSolid !== isSolid) {
      this.setState({ isSolid: willBeSolid })
    }
  }

  closeMenu() {
    const { isOpen } = this.state
    if (isOpen) {
      this.setState({
        isOpen: false,
      })
    }
  }

  toggleMenu() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  render() {
    const { isSolid, isOpen, listHeight } = this.state
    const { title, action } = this.props
    return (
      <Wrapper isSolid={isSolid} isOpen={isOpen} listHeight={listHeight}>
        <Header
          action={action}
          isOpen={isOpen}
          toggleMenu={this.toggleMenu}
          title={title}
        />
        <PageList
          isOpen={isOpen}
          ref={this.list}
          setHeight={this.setHeight}
          onClick={this.closeMenu}
        />
        <OptimizedResize onResize={this.closeMenu} />
        <Curtain isOpen={isOpen} onClick={this.closeMenu} />
      </Wrapper>
    )
  }
}

export default Navigation
