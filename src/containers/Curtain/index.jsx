import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import { position } from 'polished';

import mapState from './mapState';

const StyledCurtain = styled(animated.div)`
  ${position('fixed', 0, 0, 0, 0)};
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Curtain = ({ isVisible }) => (
  <Transition
    native
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {isVisible && (styles => <StyledCurtain style={styles} />)}
  </Transition>
);

Curtain.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default mapState(Curtain);
