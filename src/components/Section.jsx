import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import { createPadding } from 'utils/createSpace';
import { space } from 'style';
import { hiDPI } from 'polished';

const Section = styled.section`
  position: ${({ position }) => position};
  display: ${({ display }) => display};

  ${({ background }) =>
    background &&
    css`
      background-color: ${({ theme }) => theme.surface};
    `}
  color: ${({ theme }) => theme.title};
  overflow: hidden;
  ${({ borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.borderSeparate};
    `}
  ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: 1px solid ${({ theme }) => theme.borderSeparate};
    `}

  ${hiDPI(2)} {
    border-width: 0.5px;
  }
  padding: ${({ noPaddingX, noPaddingY }) =>
    createPadding(noPaddingY ? 0 : 'xm', noPaddingX ? 0 : 'm')};

  ${media.tabletPortrait(css`
    padding: ${({ noPaddingX, noPaddingY }) =>
      createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'xl')};
  `)}

  ${media.tabletLandscape(css`
    padding: ${({ noPaddingX, noPaddingY }) =>
      createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)}

  ${media.desktop(css`
    padding: ${({ noPaddingX, noPaddingY }) =>
      createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)};

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${space.xr}px;
        `
      : ''};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${space.xr}px;

          ${media.desktop(css`
            margin-bottom: ${space.l}px;
          `)};
        `
      : ''};
`;

Section.propTypes = {
  background: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderTop: PropTypes.bool,
  display: PropTypes.oneOf(['block', 'flex']),
  marginBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
  noPaddingX: PropTypes.bool,
  noPaddingY: PropTypes.bool,
  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
};

Section.defaultProps = {
  background: false,
  borderBottom: false,
  borderTop: false,
  display: 'block',
  marginBottom: false,
  marginTop: false,
  noPaddingX: false,
  noPaddingY: false,
  position: 'static',
};

export default Section;
