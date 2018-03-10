import React, { Component } from 'react';
import EventListener from 'react-event-listener';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { TweenLite, CSSPlugin } from 'gsap';
import { TransitionMotion, spring } from 'react-motion';

import Head from './Head';
import MenuList from './MenuList';
import NavWrapper from './NavWrapper';
import Curtain from './Curtain';
import config from './config';

import { setMenuVisibility, toggleMenuVisibility, setMenuAction } from 'actions';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { solid: false };
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.menu.isVisible != this.props.menu.isVisible) {
  //     this.curtainAnimation(nextProps.menu.isVisible);
  //   }
  // }
  handleScroll = () => {
    let isSolid = window.pageYOffset != 0
    if (isSolid != this.state.solidNav) {
      this.setState({solid: isSolid})
    }
  }
  handleResize = debounce(() => {
    const { dispatch } = this.props;
    dispatch(setMenuVisibility(false));
  }, 17)
  toggleMenu = () => {
    const { dispatch } = this.props;
    dispatch(toggleMenuVisibility());
  }
  curtainAnimation = (visibility) => {
    const tl = TweenLite.to(
      this.curtain,
      config.time.default,
      { autoAlpha: visibility },
    )
  }
  componentDidMount() {
    const { dispatch } = this.props;
  }
  willLeave = () => {
    return { opacity: spring(0) };
  }
  willEnter = () => {
    return { opacity: 0 };
  }
  render() {
    const { dispatch, menu: { isVisible, menuHeight, action }} = this.props;
    const { solid } = this.state;
    return (
      <div>
        <NavWrapper id="app-nav" innerRef={node => this.nav = node} isVisible={isVisible} solid={solid} menuHeight={menuHeight}>
          <EventListener target="window" onResize={this.handleResize} onScroll={this.handleScroll}/>
          <Head action={action} isVisible={isVisible} toggleMenu={this.toggleMenu} />
          <MenuList isVisible={isVisible} dispatch={dispatch}/>
        </NavWrapper>
        <TransitionMotion willLeave={this.willLeave} willEnter={this.willEnter}
          styles={ isVisible ? [{key: 'curtain', style: {opacity: spring(1, {stiffness: 20, damping: 17})}}] : [] }>
          {
            styles => <div>{
              styles.map(config =><Curtain key={config.key} {...config.style}/>)
            }</div>
          }
        </TransitionMotion>
      </div>
    )
  }
}

Nav.propTypes = {
  menu: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { menu } = state;
  return { menu }
}

export default withRouter(connect(mapStateToProps)(Nav));
