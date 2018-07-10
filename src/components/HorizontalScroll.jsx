import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { media as md } from 'utils/mixins';

const scrollStyle = css`
  overflow-x: scroll;
  width: 100vw;
  left: 50%;
  transform: translateX(-50vw);
`;

const HorizontalScrol = styled.div`
  -webkit-overflow-scrolling: touch;
  ${({ media }) => (media ? md[media](scrollStyle) : scrollStyle)};
  ${({ bar }) => !bar
    && css`
      &::-webkit-scrollbar {
        opacity: 0;
        display: none;
      }
    `};
`;

HorizontalScrol.propTypes = {
  media: PropTypes.oneOf(Object.keys(md)),
};

HorizontalScrol.defaultProps = {
  media: undefined,
};

export default HorizontalScrol;
