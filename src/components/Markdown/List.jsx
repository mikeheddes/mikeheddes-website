import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space } from 'style';
import position, { widthProp } from 'utils/position';

const listStyle = css`
  list-style-position: inside;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
  ${({ tag }) => tag === 'ol' && css``};
  ${({ tag }) => tag === 'ul' && css``};
  margin-bottom: ${space.xr}px;
  ${position};

  ol, ul {
    padding-left: 1.25em;
    margin-bottom: 0.5em;
  }

  li {
    margin-bottom: 0.5em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const List = (props) => {
  const { tag } = props;
  const L = styled(tag)`
    ${listStyle};
  `;
  return <L {...props} />;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['ol', 'ul']).isRequired,
  width: widthProp,
};

List.defaultProps = {
  className: '',
  width: 'text',
};

export default List;
