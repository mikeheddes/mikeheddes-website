import styled, { css } from "styled-components";

import { screen } from "../styles/breakpoints";

const StyledMath = styled.div<{ inline?: boolean }>`
  && {
    overflow: auto;

    ${({ inline }) =>
      !inline &&
      css`
        font-size: 1.08em;

        & + & {
          margin-top: -15px;
        }
      `};

    @media ${screen.sm} {
      overflow: visible;
    }
  }
`;

const Math = ({ inline, children, ...restProps }) => (
  <StyledMath inline={inline} as={inline ? "span" : "p"} {...restProps}>
    {children}
  </StyledMath>
);

Math.defaultProps = {
  inline: false,
};

export default Math;
