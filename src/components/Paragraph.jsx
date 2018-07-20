import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fluidText } from 'utils/mixins';
import { marginPropType } from 'utils/PropTypes';
import { createMargin } from 'utils/createSpace';

const Paragraph = styled.p.attrs({
  lineheight: 1.48,
})`
  font-weight: 400;
  color: ${({ theme, color }) => {
    switch (color) {
      case 'subtle':
        return theme.textSubtle;
      default:
        return theme.text;
    }
  }};
  line-height: ${({ lineheight }) => lineheight};

  ${({ lineClamp }) => lineClamp
    && css`
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
      max-height: calc(1em * ${({ lineheight }) => lineheight * lineClamp});
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 20px;
    `};

  ${({ size }) => {
    switch (size) {
      case 's':
        return fluidText(13, 15);
      case 'r':
        return fluidText(15, 17);
      case 'l':
        return fluidText(18, 20);
      default:
        return 'font-size: inherit';
    }
  }};

  margin: ${({
    margin, marginTop, marginRight, marginBottom, marginLeft,
  }) => createMargin(
    marginTop || margin,
    marginRight || margin,
    marginBottom || margin,
    marginLeft || margin,
  )};
`;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['s', 'r', 'l', 'inherit']),
  color: PropTypes.oneOf(['subtle', 'normal']),
  margin: marginPropType,
  marginTop: marginPropType,
  marginRight: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  lineClamp: PropTypes.number,
};

Paragraph.defaultProps = {
  className: '',
  size: 'inherit',
  color: 'normal',
  margin: 0,
  lineClamp: null,
};

export default Paragraph;
