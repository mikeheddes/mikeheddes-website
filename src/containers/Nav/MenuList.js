import React, { Component } from 'react';
import EventListener from 'react-event-listener';
import PropTypes from 'prop-types';
import { TweenMax, CSSPlugin } from 'gsap';
import { debounce } from 'lodash';
import { spring, StaggeredMotion } from 'react-motion';

import { setMenuHeight } from 'actions';
import config from './config';
import MenuListWrapper from './MenuListWrapper';
import MenuItem from './MenuItem';

class MenuList extends Component {
  componentDidMount(){
    this.dispatchMenuHeight();
  }
  dispatchMenuHeight = debounce(() => {
    const { dispatch } = this.props;
    dispatch(setMenuHeight(this.menuList.clientHeight));
  }, 17)
  componentWillReceiveProps(nextProps) {
    const { isVisible } = this.props;
    if (nextProps.isVisible && nextProps.isVisible != isVisible) this.animateIn();
  }
  animateIn() {
    let menuItems = this.menuList.getElementsByTagName('li');
    TweenMax.staggerFrom(
      menuItems,
      .7, {
        y: "-=20",
        autoAlpha: 0,
        ease: Power2.easeOut,
        delay: 0.05
      },
      0.15
    );
  }
  render() {
    const { dispatch } = this.props;
    return (
      <MenuListWrapper id="menu-list" innerRef={node => {this.menuList = node}}>
        <EventListener target="window" onResize={this.dispatchMenuHeight}/>
        {config.links.map((link, i) =>
          <MenuItem key={i} {...link}/>
        )}
      </MenuListWrapper>
    );
  }
}

MenuList.propTypes = {
  isVisible: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

export default MenuList;
