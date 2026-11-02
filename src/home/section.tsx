import { ReactNode } from "react";
import styled from "styled-components";

import { fluidFont } from "../styles";
import { screen } from "../styles/breakpoints";

export const SectionName = styled.h2`
  color: var(--primary);
  ${fluidFont(12, 13)};
  font-weight: 600;
  margin-bottom: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-divider-solid);

  @media ${screen.sm} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

const HeaderTitle = styled.h3`
  color: var(--heading);
  ${fluidFont(24, 31)};
  font-weight: 700;
`;

const HeaderMeta = styled.div`
  color: var(--text-subtle);
  ${fluidFont(14, 15)};
  line-height: 1.4;
  max-width: 440px;

  @media ${screen.sm} {
    text-align: right;
  }
`;

type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
