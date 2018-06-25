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
  margin: ${props =>
    createMargin(
      props.marginTop || props.margin,
      props.marginRight || props.margin,
      props.marginBottom || props.margin,
      props.marginLeft || props.margin,
    )
  };

  ${props => props.onClick && css`
    cursor: pointer;
  `}

  ${props => props.size == 'r' && css`
    font-size: 12px;
  `}

  ${props => props.size == 'l' && css`
    font-size: 14px;
  `}

  ${props => props.count ? css`
    border-radius: 1000px;
    font-weight: 600;
  ` : css`
    border-radius: ${radius.r}px;
    font-weight: 700;
  `}

  ${props => props.weight == 'subtle' && css`

    ${props => props.fillType == 'solid' && css`
      color: ${props => props.theme.textSubtle};
      background-color: ${props => props.theme.surfaceProminent};
    `}

    ${props => props.fillType == 'fade' && css`
      background-color: ${props => fade(.95, props.theme.title)};
      color: ${props => fade(.5, props.theme.title)};
    `}

  `}

  ${props => props.weight == 'bold' && css`

    ${props => props.fillType == 'solid' && css`
      color: ${props => props.theme.headingSubtle};
      background-color: ${props => props.theme.surfaceSelected};
    `}

    ${props => props.fillType == 'fade' && css`
      background-color: ${props => fade(.9, props.theme.title)};
      color: ${props => fade(.3, props.theme.title)};
    `}

  `}

`

Badge.propTypes = {
  count: PropTypes.bool,
  fillType: PropTypes.oneOf(['solid', 'fade', 'blur']).isRequired,
  margin: marginPropType.isRequired,
  marginTop: marginPropType,
  marginRight: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['r', 'l']).isRequired,
  weight: PropTypes.oneOf(['bold', 'subtle']).isRequired,
}

Badge.defaultProps = {
  fillType: 'solid',
  margin: 0,
  size: 'r',
  weight: 'bold',
}

export default Badge
