import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ItemWrapper from './ItemWrapper';
import Item from './Item';


class MenuItem extends Component {
  render() {
    const { to, exact, title } = this.props;
    return(
      <ItemWrapper>
        <Item to={to} exact={exact}>{title}</Item>
      </ItemWrapper>
    )
  }
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  exact: true,
}

export default MenuItem
