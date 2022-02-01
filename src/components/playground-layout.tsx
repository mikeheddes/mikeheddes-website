import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import Xmark from "../icons/Xmark";
import Info from "../icons/info";
import ButtonComp from "./button";
import { screen } from "../styles/breakpoints";
import { useRouter } from "next/router";

const Wrapper = styled.div<{ backgroundColor?: string }>`
  display: block;
  object-fit: contain;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-width: 0px;
  max-width: none;
  min-height: 0px;
  max-height: none;
  width: 100%;
  height: 100%;
  transform: none;
  margin: 0px;
  touch-action: none;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "var(--background)"};
  cursor: grab;

  :active {
    cursor: grabbing;
  }
`;

const Button = styled(ButtonComp)`
  position: absolute;
  top: 20px;
  left: 20px;

  @media ${screen.md} {
    top: 30px;
    left: 30px;
  }
`;

type Props = {
  children: ReactNode;
  blogPost: string;
  backgroundColor?: string;
};

export default function PlaygroundLayout({
  children,
  blogPost,
  backgroundColor,
}: Props) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      {children}
      <Link href={blogPost} passHref>
        <Button as="a">
          <Info />
        </Button>
      </Link>
    </Wrapper>
  );
}
