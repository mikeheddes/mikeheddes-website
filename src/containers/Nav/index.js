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
import Wrapper from './Wrapper';
import Curtain from './Curtain';
import config from './config';
import Warning from 'containers/Warning';

import { setMenuVisibility, toggleMenuVisibility, setMenuAction, setMenuHeight } from 'actions';
import { setWarningHeight, resolveWarning } from 'actions';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { solid: false };
  }
  handleScroll = () => {
    let isSolid = window.pageYOffset != 0
    if (isSolid != this.state.solidNav) {
      this.setState({solid: isSolid})
    }
  }
  handleResize = debounce(() => this.props.setMenuVisibility(false), 17)
  curtainAnimation = visibility => {
    const tl = TweenLite.to(
      this.curtain,
      config.time.default,
      { autoAlpha: visibility },
    )
  }
  willLeave = () => {
    return { opacity: spring(0) };
  }
  willEnter = () => {
    return { opacity: 0 };
  }
  render() {
    const { dispatch, menu: { isVisible, menuHeight, action }, warning, setWarningHeight, resolveWarning, toggleMenuVisibility, setMenuHeight} = this.props;
    const { solid } = this.state;
    return (
      <div>
        {warning.message ? <Warning {...warning} setHeight={setWarningHeight} resolve={resolveWarning} /> : null}
        <Wrapper id="app-nav" innerRef={node => this.nav = node} isVisible={isVisible} solid={solid} menuHeight={menuHeight} top={warning.height}>
          <EventListener target="window" onResize={this.handleResize} onScroll={this.handleScroll}/>
          <Head action={action} isVisible={isVisible} toggleMenu={toggleMenuVisibility} />
          <MenuList isVisible={isVisible} setHeight={setMenuHeight}/>
        </Wrapper>
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
  const { menu, warning } = state;
  return { menu, warning }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setWarningHeight: height => dispatch(setWarningHeight(height)),
    resolveWarning: () => dispatch(resolveWarning()),
    setMenuHeight: height => dispatch(setMenuHeight(height)),
    setMenuVisibility: visibility => dispatch(setMenuVisibility(visibility)),
    toggleMenuVisibility: () => dispatch(toggleMenuVisibility()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
