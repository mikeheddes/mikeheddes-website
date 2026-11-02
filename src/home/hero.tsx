import styled from "styled-components";
import Image from "next/image";

import { screen } from "../styles/breakpoints";
import { contentWrapper, fluidFont } from "../styles";
import profilePic from "./profile.jpg";
import GitHub from "../icons/logos/github";
import LinkedIn from "../icons/logos/linkedin";
import GoogleScholar from "../icons/logos/google-scholar";

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--background-backdrop);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    pointer-events: none;
    border-bottom: 1px solid var(--border-content);
  }
`;

const HeaderInner = styled.div<{ $wide?: boolean }>`
  ${contentWrapper};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  gap: 16px;
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
  color: var(--heading);
  font-weight: 500;
  ${fluidFont(18, 20)};
  white-space: nowrap;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${screen.sm} {
    gap: 20px;
  }
`;

const NavLink = styled.a`
  color: var(--text-subtle);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 120ms ease;

  &:hover {
    color: var(--primary);
  }
`;

const Section = styled.section<{ $wide?: boolean }>`
  ${contentWrapper};
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${screen.md} {
    padding-top: 80px;
  }
`;

const HeroLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${screen.md} {
    display: flow-root;
  }
`;

const MainColumn = styled.div`
  display: block;

  @media ${screen.md} {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  color: var(--heading-obvious);
  ${fluidFont(28, 52)};
  font-weight: 700;
  margin: 0 0 4px 0;
`;

const SubTitle = styled.h2`
  font-weight: 600;
  color: var(--heading);
  ${fluidFont(20, 30)};
  margin: 0 0 20px 0;
`;

const BioParagraph = styled.p`
  color: var(--text);
  ${fluidFont(16, 17)};
  font-weight: 400;
  line-height: 1.68;
  margin: 0 0 10px 0;

  strong {
    color: var(--heading-obvious);
    font-weight: 600;
  }
`;

const ContactRow = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media ${screen.md} {
    gap: 20px;
  }
`;

const ContactButton = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 15px;
  border-radius: 6px;
  ${fluidFont(15, 16)};
  font-weight: 500;
  text-decoration: none;
  transition: all 140ms ease;
  border: 1px solid
    ${({ $primary }) =>
      $primary ? "var(--primary)" : "var(--border-divider-solid)"};
  background-color: ${({ $primary }) =>
    $primary ? "var(--primary)" : "var(--surface-subtle)"};
  color: ${({ $primary }) => ($primary ? "#ffffff" : "var(--heading-obvious)")};

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    flex-shrink: 0;
  }

  &:hover {
    border-color: var(--primary);
    color: ${({ $primary }) => ($primary ? "#ffffff" : "var(--primary)")};
    background-color: ${({ $primary }) =>
      $primary ? "var(--primary)" : "var(--surface-tint)"};
  }
`;

const ProfileColumn = styled.aside`
  width: 100%;
  max-width: 140px;

  @media ${screen.md} {
    float: right;
    width: 180px;
    max-width: none;
    margin-left: 50px;
    margin-bottom: 50px;
  }

  @media ${screen.lg} {
    width: 200px;
    margin-left: 80px;
  }
`;

const PortraitFrame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--surface);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--border-content);
    box-sizing: border-box;
    pointer-events: none;
    border-radius: 12px;
  }
`;

export default function Hero() {
  return (
    <>
      <HeaderBar>
        <HeaderInner $wide>
          <Brand href="#about">Mike Heddes</Brand>
          <NavLinks aria-label="Primary navigation">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </NavLinks>
        </HeaderInner>
      </HeaderBar>

      <Section id="about" $wide>
        <HeroLayout>
          <ProfileColumn>
            <PortraitFrame>
              <Image
                src={profilePic}
                placeholder="blur"
                priority
                alt="Picture of Mike Heddes"
                fill
                sizes="(min-width: 1280px) 200px, (min-width: 960px) 180px, 140px"
                style={{ objectPosition: "50% 20%", objectFit: "cover" }}
              />
            </PortraitFrame>
          </ProfileColumn>

          <MainColumn>
            <Title>Mike Heddes</Title>
            <SubTitle>Research Software Engineer</SubTitle>
            <BioParagraph>
              I am Mike Heddes, a Research Software Engineer at Google. My
              research covers artificial intelligence (AI) and algorithms for
              large-scale data, ranging from model architectures and multi-agent
              systems to randomized sketching algorithms.
            </BioParagraph>

            <BioParagraph>
              I earned my Ph.D. in Computer Science at the University of
              California, Irvine and my B.S. in Engineering from the Amsterdam
              University of Applied Sciences. I perviously co-founded the data
              analytics startup Garmite and conducted AI research at Google
              Research, Intel Labs, and the European Space Agency. I am
              mesmerized by all meticulous design and engineering, enjoy
              tackling difficult problems, and aspire to contribute to the
              exciting achievements of humanity. In my spare time, I enjoy
              making music and reading about science, business, and technology.
            </BioParagraph>
            <ContactRow>
              <ContactButton href="https://scholar.google.com/citations?user=SZpFJqIAAAAJ">
                <GoogleScholar />
                Google Scholar
              </ContactButton>
              <ContactButton href="https://github.com/mikeheddes">
                <GitHub />
                GitHub
              </ContactButton>
              <ContactButton href="https://linkedin.com/in/mikeheddes/">
                <LinkedIn />
                LinkedIn
              </ContactButton>
            </ContactRow>
          </MainColumn>
        </HeroLayout>
      </Section>
    </>
  );
}
