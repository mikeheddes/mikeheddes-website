import styled from "styled-components";

import { screen } from "../styles/breakpoints";
import { fluidFont, contentWrapper } from "../styles";
import { dateFormatter } from "./formatters";
import { ReactNode } from "react";

const Wrapper = styled.header`
  ${contentWrapper};
  text-align: center;
  margin-top: 15px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${screen.md} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Author = styled.h2`
  ${fluidFont(21, 31)};
  color: var(--text-subtle);
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  ${fluidFont(34, 63)};
  color: var(--heading-obvious);
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;

  @media ${screen.md} {
    margin-bottom: 30px;
  }
`;

const Subtitle = styled.h4`
  ${fluidFont(18, 21)};
  color: var(--text-subtle);
  line-height: 1.3;
  font-weight: 600;
`;

type Props = {
  title: ReactNode;
  date: string;
  subtitle: ReactNode;
};

function TitleView({ title, subtitle, date }: Props) {
  return (
    <Wrapper>
      <Author>Mike Heddes</Author>
      <Title>{title}</Title>
      <Subtitle>
        {subtitle} ― {dateFormatter.format(new Date(date))}
      </Subtitle>
    </Wrapper>
  );
}

export default TitleView;
