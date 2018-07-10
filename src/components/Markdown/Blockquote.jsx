import styled from 'styled-components';
import { fluidText } from 'utils/mixins';
import { space, radius } from 'style';
import position, { widthProp } from 'utils/position';

const Blockquote = styled.blockquote`
  ${fluidText(20, 30)};
  background-color: ${({ theme }) => theme.surface};
  border-radius: ${radius.l}px;
  padding: ${space.l}px;
  ${position};

  p {
    color: ${({ theme }) => theme.link};
    font-weight: 600;
    line-height: 1.25;
    margin: 0;
  }
`;

Blockquote.propTypes = {
  width: widthProp,
};

Blockquote.defaultProps = {
  width: 'text',
};

export default Blockquote;
