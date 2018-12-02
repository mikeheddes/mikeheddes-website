import React from 'react'
import PropTypes from 'prop-types'

import MenuIcon from '../../../components/icon/Menu'
import Button from '../../../components/Button'
import Wrapper from './Wrapper'
import Accessory from './Accessory'
import Title from './Title'

const Header = props => {
  const { action, toggleMenu, isOpen, title } = props
  return (
    <Wrapper id="mobile-nav">
      <Accessory onClick={toggleMenu}>
        <span>
          <MenuIcon checked={isOpen} />
        </span>
      </Accessory>
      <Title>{title}</Title>
      <Accessory>
        {action && (
          <Button onClick={action.onClick} variation="link">
            {action.name}
          </Button>
        )}
      </Accessory>
    </Wrapper>
  )
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  action: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  toggleMenu: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Header.defaultProps = {
  action: null,
  title: '',
}

export default Header
