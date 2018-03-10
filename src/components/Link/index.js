import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DAY } from 'utils/colors';

const LinkSwitch = ({to, className, children, target}) => {
  to.replace(/^https?:\/\/mikeheddes.nl/, '');
  if (to.startsWith("/")) {
    return <Link to={to} className={className}>{children}</Link>
  }
  if (to.startsWith("http")) {
    return <a href={to} target={target || "_blank"} className={className}>{children}</a>
  }
}

const LinkComp = styled(LinkSwitch)`
  text-decoration: none;
  color: ${props => props.theme.blue};
  &:hover{
    text-decoration: underline;
  }

  ${props => props.red || props.warning ? css`
    color: ${props => props.theme.red};
  ` : ''}
`

LinkComp.defaultProps = {
  theme: DAY,
}

LinkComp.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
}

export default LinkComp;
