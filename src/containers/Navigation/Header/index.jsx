import React from 'react';
import PropTypes from 'prop-types';

import MenuSVG from 'components/svg/Menu';
import Button from 'components/Button';
import Wrapper from './Wrapper';
import Accessory from './Accessory';
import Title from './Title';

const Header = props => {
  const { action, toggleMenu, isVisible, title } = props;
  return (
    <Wrapper id="mobile-nav">
      <Accessory left clickable onClick={toggleMenu}>
        <span>
          <MenuSVG checked={isVisible} />
        </span>
      </Accessory>
      <Title>{title}</Title>
      <Accessory right>
        {action && (
          <Button onClick={action.onClick} variation="link">
            {action.name}
          </Button>
        )}
      </Accessory>
    </Wrapper>
  );
};

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  action: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  toggleMenu: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Header.defaultProps = {
  action: null,
  title: '',
};

export default Header;
