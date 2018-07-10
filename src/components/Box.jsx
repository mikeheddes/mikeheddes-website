import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { marginPropType, paddingPropType, zDepthPropType } from 'utils/PropTypes';
import { createMargin, createPadding, createWidth } from 'utils/createSpace';


const Box = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};

  margin: ${({
    margin, marginTop, marginRight, marginBottom, marginLeft,
  }) => createMargin(
    marginTop || margin,
    marginRight || margin,
    marginBottom || margin,
    marginLeft || margin,
  )};

  padding: ${({
    padding, paddingX, paddingY,
  }) => createPadding(
    paddingY || padding,
    paddingX || padding,
  )};

  ${({ width }) => width && css`
    max-width: ${createWidth(width)};
    width: 100%;
  `}

  flex: ${(props) => {
    switch (props.flex) {
      case 'grow':
        return '1 1 auto';
      case 'none':
        return '0 0 auto';
      default:
        return '0 1 auto';
    }
  }};

  align-self: ${(props) => {
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

  ${({ display }) => display === 'flex' && css`
    align-content: ${({ alignContent }) => alignContent};
    align-items: ${({ alignItems }) => alignItems};
    align-self: ${({ alignSelf }) => alignSelf};
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

    justify-content: ${({ justifyContent }) => {
    switch (justifyContent) {
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'between':
        return 'space-between';
      case 'around':
        return 'space-around';
      default:
        return 'flex-start';
    }
  }};

    align-items: ${({ alignItems }) => {
    switch (alignItems) {
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

    align-content: ${({ alignContent }) => {
    switch (alignContent) {
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'between':
        return 'space-between';
      case 'around':
        return 'space-around';
      default:
        return 'flex-start';
    }
  }};

  `}
`;


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
};

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
};

export default Box;
