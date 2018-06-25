import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { marginPropType, paddingPropType, zDepthPropType } from 'utils/PropTypes';
import { createMargin, createPadding, createWidth } from 'utils/createSpace';


const Box = styled.div`
  display: ${props => props.display};
  position: ${props => props.position};

  margin: ${props =>
    createMargin(
      props.marginTop || props.margin,
      props.marginRight || props.margin,
      props.marginBottom || props.margin,
      props.marginLeft || props.margin,
    )
  };

  padding: ${props =>
    createPadding(
      props.paddingY || props.padding,
      props.paddingX || props.padding,
    )
  };

  ${props => props.width && css`
    max-width: ${createWidth(props.width)};
    width: 100%;
  `}

  flex: ${props => {
    switch (props.flex) {
      case 'grow':
        return '1 1 auto';
      case 'none':
        return '0 0 auto';
      default:
        return '0 1 auto';
    }
  }};

  align-self: ${props => {
    switch (props.alignSelf) {
      case 'auto':
        return 'auto';
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'baseline':
        return 'baseline';
      default:
        return 'stretch';
    }
  }};

  ${props => props.display == 'flex' && css`
    align-content: ${props => props.alignContent};
    align-items: ${props => props.alignItems};
    align-self: ${props => props.alignSelf};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};

    justify-content: ${props => {
      switch (props.justifyContent) {
        case 'end':
          return 'flex-end';
        case 'center':
          return 'center';
        case 'between':
          return 'space-between';
        case 'around':
          return 'space-around'
        default:
          return 'flex-start';
      }
    }};

    align-items: ${props => {
      switch (props.alignItems) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        case 'center':
          return 'center';
        case 'baseline':
          return 'baseline';
        default:
          return 'stretch';
      }
    }};

    align-content: ${props => {
      switch (props.alignContent) {
        case 'end':
          return 'flex-end';
        case 'center':
          return 'center';
        case 'between':
          return 'space-between';
        case 'around':
          return 'space-around'
        default:
          return 'flex-start';
      }
    }};

  `}
`


Box.propTypes = {
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']).isRequired,
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']).isRequired,
  alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']).isRequired,
  border: PropTypes.bool,
  children: PropTypes.node,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  display: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']).isRequired,
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']).isRequired,
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']).isRequired,
  margin: marginPropType.isRequired,
  marginTop: marginPropType,
  marginRight: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']).isRequired,
  padding: paddingPropType.isRequired,
  paddingX: paddingPropType,
  paddingY: paddingPropType,
  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']).isRequired,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle']).isRequired,
  width: PropTypes.oneOf(['content', 'text', 'full', PropTypes.number]),
  wrap: PropTypes.bool,
  zDepth: zDepthPropType,
}

Box.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  border: false,
  direction: 'row',
  display: 'block',
  flex: 'shrink',
  justifyContent: 'start',
  margin: 0,
  overflow: 'visible',
  padding: 0,
  position: 'static',
  shape: 'square',
}

export default Box
