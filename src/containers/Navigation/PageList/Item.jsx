import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import { space } from 'style';

import Child from './Child';

const Wrapper = styled.li`
  ${media.phoneOnly(css`
    display: block;
    width: 100%;
    padding: 0 ${space.l}px;
    margin-bottom: ${space.s}px;
  `)};
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { navigateToLink, to } = this.props;
    e.preventDefault();
    navigateToLink(to);
  }

  render() {
    const { title, to, navigateToLink, ...otherProps } = this.props;
    return (
      <Wrapper>
        <Child onClick={this.onClick} href={to} {...otherProps}>
          {title}
        </Child>
      </Wrapper>
    );
  }
}

Item.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
  navigateToLink: PropTypes.func.isRequired,
};

export default Item;
