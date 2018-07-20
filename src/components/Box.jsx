import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { marginPropType, paddingPropType, zDepthPropType } from 'utils/PropTypes';
import { createMargin, createPadding, createWidth } from 'utils/createSpace';
import { fluidText } from 'utils/mixins';


const Box = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  text-align: ${({ textAlign }) => textAlign};
  ${({ markdown }) => markdown && fluidText(18, 20)}};

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
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
  border: PropTypes.bool,
  children: PropTypes.node,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  direction: PropTypes.oneOf(['row', 'column']),
  display: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  margin: marginPropType,
  marginTop: marginPropType,
  marginRight: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  markdown: PropTypes.bool,
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),
  padding: paddingPropType,
  paddingX: paddingPropType,
  paddingY: paddingPropType,
  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle']),
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
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
  markdown: false,
  overflow: 'visible',
  padding: 0,
  position: 'static',
  shape: 'square',
  textAlign: 'left',
  width: null,
};

export default Box;
