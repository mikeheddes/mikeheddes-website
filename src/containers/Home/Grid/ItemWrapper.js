import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

const ItemWrapper = styled.div`
  justify-self: stretch;
  align-self: stretch;
  text-align: left;
  overflow: hidden;
  order: ${props => props.gridOrder};
  background-color: ${props => props.theme.accentGray};

  ${props => props.text ? css`
    margin-bottom: ${spaces.xr}px;
    ${space('padding', 'xm', 'm', 'l')};
  ` : ''}

  ${props => props.image ? css`
    ${space('padding', 'xm', 'm', 0)};
  ` : ''}

  ${media.tabletPortrait(css`
    padding-left: ${spaces.M}px;
    padding-right: ${spaces.M}px;
    ${props => props.text ? css`
      padding-bottom: ${spaces.xl}px;
    ` : ''}
    ${props => props.image ? css`
      padding-top: ${spaces.xl}px;
    ` : ''}
  `)}

  ${media.tabletLandscape(css`
    padding-left: ${spaces.xM}px;
    padding-right: ${spaces.xM}px;
    ${props => props.text ? css`
      padding-bottom: ${spaces.M}px;
    ` : ''}
    ${props => props.image ? css`
      padding-top: ${spaces.M}px;
    ` : ''}
  `)}

  ${media.desktop(css`
    margin-bottom: 0;
    padding: 0;
    ${props => props.text ? css`
      padding-left: ${spaces.M}px;
      padding-right: ${spaces.M}px;
    ` : ''}
  `)}
`

ItemWrapper.propTypes = {
  gridOrder: PropTypes.number.isRequired,
  text: PropTypes.bool,
  image: PropTypes.bool,
}

export default ItemWrapper;
