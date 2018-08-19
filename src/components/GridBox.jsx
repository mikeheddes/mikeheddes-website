import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import space from 'style/space';

const GridBox = styled.div`
  display: grid;
  grid-gap: ${space.m}px;
  grid-template-columns: repeat(${({ phoneColumns }) => phoneColumns}, 1fr);

  ${media.tabletPortrait(css`
    grid-gap: ${space.xm}px;
    grid-template-columns: repeat(
      ${({ tabletPortraitColumns }) => tabletPortraitColumns},
      1fr
    );
  `)};

  ${media.tabletLandscape(css`
    grid-template-columns: repeat(
      ${({ tabletLandscapeColumns }) => tabletLandscapeColumns},
      1fr
    );
  `)};

  ${media.desktop(css`
    grid-template-columns: repeat(
      ${({ desktopColumns }) => desktopColumns},
      1fr
    );
  `)};
`;

GridBox.propTypes = {
  phoneColumns: PropTypes.number,
  tabletPortraitColumns: PropTypes.number,
  tabletLandscapeColumns: PropTypes.number,
  desktopColumns: PropTypes.number,
};

GridBox.defaultProps = {
  phoneColumns: 2,
  tabletPortraitColumns: 3,
  tabletLandscapeColumns: 4,
  desktopColumns: 5,
};

export default GridBox;
