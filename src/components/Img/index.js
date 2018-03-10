import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hiDPI } from 'polished';

import { DAY } from 'utils/colors';
import { space, radius } from 'utils/sizes';

const Img = styled.div`
  width: 100%;
  padding-bottom: 65%;
  border-radius: ${radius.s}px;
  background-clip: border-box;
  background-origin: border-box;
  background-size: cover;
  background-position: center;
  display: block;
  background-color: ${props => props.theme.accent};
  background-image: url(${props => props.src});
  border: 1px solid ${props => props.theme.borderContent};
  ${hiDPI(2)} {
    border-width: .5px;
  }

  ${props => props.wide ? css`
    padding-bottom: 52%;
  ` : ''}

  ${props => props.square ? css`
    padding-bottom: 100%;
  ` : ''}
`

Img.defaultProps = {
  theme: DAY,
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Img;
