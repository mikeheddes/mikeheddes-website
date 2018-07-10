import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { marginPropType } from 'utils/PropTypes';
import { createMargin } from 'utils/createSpace';
import space from 'style/space';
import radius from 'style/radius';

const Badge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: ${space.xs}px ${space.s}px;
  margin: ${({
    margin, marginTop, marginRight, marginBottom, marginLeft,
  }) => createMargin(
    marginTop || margin,
    marginRight || margin,
    marginBottom || margin,
    marginLeft || margin,
  )};

  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `}

  ${({ size }) => size === 'r' && css`
    font-size: 12px;
  `}

  ${({ size }) => size === 'l' && css`
    font-size: 14px;
  `}

  ${({ count }) => (count ? css`
    border-radius: 1000px;
    font-weight: 600;
  ` : css`
    border-radius: ${radius.r}px;
    font-weight: 700;
  `)}

  ${({ weight }) => weight === 'subtle' && css`

    ${({ fillType }) => fillType === 'solid' && css`
      color: ${({ theme }) => theme.textSubtle};
      background-color: ${({ theme }) => theme.surfaceProminent};
    `}

    ${({ fillType }) => fillType === 'fade' && css`
      background-color: ${({ theme }) => fade(0.95, theme.title)};
      color: ${({ theme }) => fade(0.5, theme.title)};
    `}

  `}

  ${({ weight }) => weight === 'bold' && css`

    ${({ fillType }) => fillType === 'solid' && css`
      color: ${({ theme }) => theme.headingSubtle};
      background-color: ${({ theme }) => theme.surfaceSelected};
    `}

    ${({ fillType }) => fillType === 'fade' && css`
      background-color: ${({ theme }) => fade(0.9, theme.title)};
      color: ${({ theme }) => fade(0.3, theme.title)};
    `}

  `}

`;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.bool,
  fillType: PropTypes.oneOf(['solid', 'fade', 'blur']),
  margin: marginPropType,
  marginTop: marginPropType,
  marginRight: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['r', 'l']),
  weight: PropTypes.oneOf(['bold', 'subtle']),
};

Badge.defaultProps = {
  count: false,
  fillType: 'solid',
  margin: 0,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  size: 'r',
  weight: 'bold',
};

export default Badge;
