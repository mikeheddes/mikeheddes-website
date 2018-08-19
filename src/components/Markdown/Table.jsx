import styled from 'styled-components';
import { space, radius } from 'style';
import position, { widthProp } from 'utils/position';
import { transparentize as fade } from 'polished';

const Table = styled.table`
  display: block;
  width: 100%;
  font-size: 90%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: ${space.l}px;
  ${position};

  th {
    color: ${({ theme }) => theme.heading};
    vertical-align: bottom;
  }

  td {
    color: ${({ theme }) => theme.text};
    vertical-align: baseline;
  }

  tr:nth-child(2n),
  th {
    background-color: ${({ theme }) => fade(0.5, theme.surface)};
  }

  th,
  td {
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.surface};

    &:first-child {
      border-top-left-radius: ${radius.r}px;
      border-bottom-left-radius: ${radius.r}px;
    }

    &:last-child {
      border-top-right-radius: ${radius.r}px;
      border-bottom-right-radius: ${radius.r}px;
    }
  }
`;

Table.propTypes = {
  width: widthProp,
};

Table.defaultProps = {
  width: 'text',
};

export default Table;
