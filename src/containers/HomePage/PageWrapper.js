import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';
import { footerHeight } from 'utils/sizes';

const pageWrapper = styled.main`
  padding-bottom: ${footerHeight}px;
`

export default pageWrapper
