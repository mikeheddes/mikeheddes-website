import React, { Component } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import EventListener from 'react-event-listener';
import PropTypes from 'prop-types';

import MenuSVG from 'svg/Menu';
import { toggleMenuVisibility, menuActionStyles } from 'actions';
import HeadWrapper from './HeadWrapper';
import Accessory from './Accessory';
import Title from './Title';
import AccessoryLink from './AccessoryLink';

class Head extends Component {
  render() {
    const { dispatch, action, toggleMenu, isVisible, title } = this.props;
    return (
      <HeadWrapper id="mobile-nav">
        <Accessory left clickable onClick={toggleMenu}>
          <span><MenuSVG checked={isVisible}/></span>
        </Accessory>
        <Title>{title}</Title>
        <Accessory right>
          {action.name ? <AccessoryLink type={action.style} to={action.url}>
            {action.name}
          </AccessoryLink> : null}
        </Accessory>
      </HeadWrapper>
    );
  }
}

Head.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  action: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

Head.defaultProps = {
  isVisible: false,
  action: {
    name: null
  },
  title: 'Mike Heddes',
}

export default Head;
