import styled from 'styled-components';
import { fluidText } from 'utils/mixins';
import { space, radius, typography } from 'style';
import { transparentize as fade } from 'polished';

const Preformatted = styled.pre`
  ${fluidText(18, 20)};
  background-color: ${({ theme }) => fade(0.5, theme.surface)};
  margin-bottom: ${space.xm}px;
  font-family: ${typography.mono};
  line-height: 1.25;
  border-radius: ${radius.m}px;
`;

export default Preformatted;
