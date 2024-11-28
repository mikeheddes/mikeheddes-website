import { ReactNode, ElementType } from "react";
import styled from "styled-components";

import { screen } from "../styles/breakpoints";
import { fluidFont } from "../styles";

const Grid = styled.div<{ $numItems: number }>`
  background-color: var(--surface-subtle);
  border-radius: 10px;
  max-width: 375px;
  margin: 20px auto;

  @media ${screen.sm} {
    margin: 30px 0;
    max-width: none;
    border-radius: 0px;
    background-color: transparent;
    display: grid;
    grid-template-columns: ${({ $numItems }) => `repeat(${$numItems}, 1fr)`};
    grid-gap: 20px;
    justify-content: center;
  }

  @media ${screen.md} {
    grid-gap: 30px;
  }
`;

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 52px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border-content);
  color: var(--heading-obvious);
  text-decoration: none;
  transition: opacity 100ms ease-out;
  cursor: pointer;

  :active {
    opacity: 0.5;
  }

  :last-child {
    border-bottom: none;
  }

  @media ${screen.sm} {
    height: auto;
    background-color: var(--surface);
    flex-direction: column;
    border-radius: 10px;
    padding: 8px;
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
  @media ${screen.sm} {
    margin: 12px 0 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;

    @media ${screen.sm} {
      width: 34px;
      height: 34px;
    }
  }
`;

const Label = styled.div`
  font-weight: 500;
  flex: 1 0 auto;
  text-align: left;
  ${fluidFont(18, 18)};
  margin-right: 15px;

  @media ${screen.sm} {
    margin-right: 0px;
    text-align: center;
    opacity: 0.5;
    ${fluidFont(13, 14)};
  }
`;

type ActionItemProps = {
  children: string;
  icon: ElementType;
  href: string;
};

export function ActionItem({ children, icon: Icon, href }: ActionItemProps) {
  return (
    <ItemWrapper href={href}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Label>{children}</Label>
    </ItemWrapper>
  );
}

type ActionBlockProps = {
  children: ReactNode;
  numItems: number;
};

export function ActionBlock({ children, numItems }: ActionBlockProps) {
  return <Grid $numItems={numItems}>{children}</Grid>;
}
