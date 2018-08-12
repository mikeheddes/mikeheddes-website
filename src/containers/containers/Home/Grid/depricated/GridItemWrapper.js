import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

const GridItemWrapper = styled.div`
  justify-self: stretch;
  align-self: stretch;
  text-align: left;
  overflow: hidden;
  background-color: ${props => props.theme.accentGray};

  ${props => props.item ? css`
    margin-bottom: ${spaces.xr}px;
    ${space('padding', 'xm', 'm', 'l')};
  ` : ''}

    ${props => props.image ? css`
      ${space('padding', 0, 'xs')};
    ` : ''}


  ${media.tabletPortrait(css`
    padding-left: ${spaces.M}px;
    padding-right: ${spaces.M}px;
    ${props => props.item ? css`
      padding-bottom: ${spaces.xl}px;
    ` : ''}
    ${props => props.image ? css`
      padding-top: ${spaces.xl}px;
    ` : ''}
  `)}
  ${media.tabletLandscape(css`
    padding-left: ${spaces.xM}px;
    padding-right: ${spaces.xM}px;
  `)}
  ${media.desktop(css`
    margin-bottom: 0;
    padding: 0;
    ${props => props.item ? css`
      padding-left: ${spaces.M}px;
      padding-right: ${spaces.M}px;
    ` : ''}
  `)}
  ${props => props.gridOrder ? css`
    order: ${props.gridOrder};
  ` : ''};
`

GridItemWrapper.propTypes = {
  theme: PropTypes.shape({
    accentGray: PropTypes.string.isRequired,
  }),
  order: PropTypes.number.isRequired,
}

export default GridItemWrapper;
