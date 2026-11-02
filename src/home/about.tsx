import { ReactNode } from "react";
import Image from "next/image";
import styled from "styled-components";

import { contentWrapper, fluidFont } from "../styles";
import { SectionHeader } from "./section";
import { screen } from "../styles/breakpoints";

import googleLogoImg from "./logos/google.png";
import esaLogoImg from "./logos/esa.png";
import auasLogoImg from "./logos/auas.png";

const Section = styled.section<{ $wide?: boolean }>`
  ${contentWrapper};
  padding-top: 20px;
  padding-bottom: 50px;

  @media ${screen.md} {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media ${screen.md} {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

const GroupBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const PositionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-content);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const LogoBadge = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;

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
    border-radius: 6px;
  }

  svg {
    width: 26px;
    height: 26px;
    display: block;
  }
`;

const GarmiteInitial = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  color: #ffffff;
  background-color: #0066db;
  user-select: none;
`;

const PositionText = styled.div`
  flex: 1;
  min-width: 0;
  ${fluidFont(15, 15)};
  line-height: 1.2;
  color: var(--text);
  display: flex;
  flex-direction: column;
`;

const RoleTitle = styled.span`
  color: var(--text-subtle);
  font-weight: 400;
`;

const InstituteName = styled.span`
  font-weight: 600;
  color: var(--heading-obvious);
`;

const PeriodText = styled.span`
  font-size: 14px;
  color: var(--text-subtle);
  white-space: nowrap;
  flex-shrink: 0;
  display: none;

  @media ${screen.sm} {
    display: inline;
  }
`;

function GoogleLogo() {
  return (
    <Image
      src={googleLogoImg}
      alt="Google logo"
      width={38}
      height={38}
      style={{ objectFit: "contain" }}
    />
  );
}

function UCILogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 235.5 252"
      aria-label="UC Irvine logo"
    >
      <g transform="translate(.90975 1.0903)">
        <path
          fill="#ffc72c"
          d="m34.1 0v25.5h13.301v47.699c-4.9 1.8-9.4012 3.7004-13.701 5.9004-21.401 11.101-33.7 27.101-33.7 44.101s12.299 33.002 33.699 44.102c4.2 2.2 8.8012 4.1984 13.701 5.8984v18.801c0 34.2 26.7 58 65 58h10.4c38.3 0 65-23.9 65-58v-14.699c17.4-3.9 32.198-9.4 44.398-16.5l-17.398-23.5c-0.2 0.1-0.3 0.19883-0.5 0.29883-6.2 3.3-14.8 6.8008-26.4 9.8008v-48.301c11.6 3 20.2 6.5008 26.4 9.8008 0.6 0.3 1.0992 0.60039 1.6992 0.90039l17.5-23.4c-12.4-7.5-27.7-13.201-45.6-17.201v-43.699h13.299v-25.5h-55.699v25.5h13.301v39.1c-8.5-0.9-17.401-1.4988-26.701-1.7988v-5.8008h13.4v-25.4h-55.699v25.4h13.398v5.8008c-9.401 0.5-18.3 1.399-26.7 2.799v-40.1h13.301v-25.5h-55.701zm98 91.801c9.8 0.4 18.701 1.1 26.701 2v58.799c-8 1-16.901 1.7-26.701 2v-62.799zm-28.9 0.199v62.5c-10.201-0.6-19.1-1.8-26.7-3.3v-56c7.6-1.501 16.399-2.7 26.7-3.2zm-55.799 12.9v36.9c-0.101-0.2-0.201-0.3-0.401-0.3-12.4-6.4-18-13.8-18-18.2 0-4.5 5.6-11.901 18-18.201 0.1-0.1 0.30039-0.0992 0.40039-0.19922zm29 75.799c8.4 1.4 17.299 2.4008 26.699 2.8008v5.9004h-13.299v25.5h55.699v-25.5h-13.4v-5.7012c9.4-0.3 18.301-0.89883 26.701-1.7988v10.1c0 14-9.5 29-36 29h-10.4c-26.5 0-36-15-36-29v-11.301z"
        />
        <path
          fill="#0c2340"
          d="m39.301 4.5996v16.201h13.299v50.6c5.8-1.9 12-3.5012 18.6-4.7012v-45.799h13.301v-16.301h-45.199zm111.4 0v16.201h13.4v44.299c6.5 0.8 12.7 1.8 18.6 3v-47.199h13.301v-16.301h-45.301zm-55.7 31.599v16.201h13.4v141.7h-13.4v16.201h45.301v-16.201h-13.4v-141.7h13.4v-16.201h-45.301zm37.1 31.801v18.6c41.3 1.4 67 8.9008 82.9 16.801l11.3-15.099c-22.7-12.2-54.3-19.001-94.2-20.301zm-28.9 0.09961c-26.7 1.4-49.7 6.7012-67 15.701-19.7 10.1-31 24.498-31 39.398s11.3 29.3 30.9 39.4c17.3 8.9 40.3 14.301 67 15.701v-18.602h0.0996c-54-3-79.299-22.8-79.299-36.5s25.299-33.4 79.299-36.5v-18.6zm60.9 26.301v57.5c6.9-1 13-2.1004 18.6-3.4004v-50.699c-5.6-1.3-11.7-2.4004-18.6-3.4004zm-92.9 2c-7.5 1.8-13.6 3.9-18.6 6v41.699c4.9 2.1 11.1 4.2 18.6 6v-53.699zm142.6 47.199c-16 7.8-41.501 14.901-81.701 16.301v18.6c39.2-1.3 70.4-7.8992 93-19.699l-11.299-15.201zm-161.1 31.5v17c0 31.1 24.601 52.801 59.801 52.801h10.4c35.2 0 59.799-21.701 59.799-52.801v-13.699c-6 1.1-12.1 2.1004-18.6 2.9004v10.699c0 25.2-22.199 34.199-41.199 34.199h-10.4c-30.4 0-41.199-18.4-41.199-34.2v-12.199c-6.6-1.3-12.802-2.9012-18.602-4.7012z"
        />
      </g>
    </svg>
  );
}

function GarmiteLogo() {
  return <GarmiteInitial>G</GarmiteInitial>;
}

function IntelLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 388.2 150.6"
      aria-label="Intel logo"
    >
      <rect y="2.1" fill="#04C7FD" width="28.1" height="28.1" />
      <path
        fill="#0068B5"
        d="M27.4,148.5V47.3H0.8v101.2H27.4z M204.2,149.5v-24.8c-3.9,0-7.2-0.2-9.6-0.6c-2.8-0.4-4.9-1.4-6.3-2.8c-1.4-1.4-2.3-3.4-2.8-6c-0.4-2.5-0.6-5.8-0.6-9.8V70.1h19.3V47.3h-19.3V7.8h-26.7v97.9c0,8.3,0.7,15.3,2.1,20.9c1.4,5.5,3.8,10,7.1,13.4s7.7,5.8,13,7.3c5.4,1.5,12.2,2.2,20.3,2.2L204.2,149.5L204.2,149.5z M357,148.5V0h-26.7v148.5H357z M132.5,57.2c-7.4-8-17.8-12-31-12c-6.4,0-12.2,1.3-17.5,3.9c-5.2,2.6-9.7,6.2-13.2,10.8l-1.5,1.9v-1.7V47.3H43v101.2h26.5V94.6v3.7c0-0.6,0-1.2,0-1.8c0.3-9.5,2.6-16.5,7-21c4.7-4.8,10.4-7.2,16.9-7.2c7.7,0,13.6,2.4,17.5,7c3.8,4.6,5.8,11.1,5.8,19.4l0,0v0.2l0,0l0,0v53.5h26.9V91C143.7,76.6,139.9,65.2,132.5,57.2z M316.5,97.7c0-7.3-1.3-14.1-3.8-20.5c-2.6-6.3-6.2-11.9-10.7-16.7c-4.6-4.8-10.1-8.5-16.5-11.2s-13.5-4-21.2-4c-7.3,0-14.2,1.4-20.6,4.1c-6.4,2.8-12,6.5-16.7,11.2s-8.5,10.3-11.2,16.7c-2.8,6.4-4.1,13.3-4.1,20.6c0,7.3,1.3,14.2,3.9,20.6c2.6,6.4,6.3,12,10.9,16.7c4.6,4.7,10.3,8.5,16.9,11.2c6.6,2.8,13.9,4.2,21.7,4.2c22.6,0,36.6-10.3,45-19.9l-19.2-14.6c-4,4.8-13.6,11.3-25.6,11.3c-7.5,0-13.7-1.7-18.4-5.2c-4.7-3.4-7.9-8.2-9.6-14.1l-0.3-0.9h79.5L316.5,97.7L316.5,97.7z M237.2,88.4c0-7.4,8.5-20.3,26.8-20.4c18.3,0,26.9,12.9,26.9,20.3L237.2,88.4z"
      />
      <path
        fill="#0068B5"
        d="M387.4,135.3c-0.5-1.2-1.2-2.2-2.1-3.1c-0.9-0.9-1.9-1.6-3.1-2.1s-2.5-0.8-3.8-0.8c-1.4,0-2.6,0.3-3.8,0.8c-1.2,0.5-2.2,1.2-3.1,2.1c-0.9,0.9-1.6,1.9-2.1,3.1c-0.5,1.2-0.8,2.5-0.8,3.8c0,1.4,0.3,2.6,0.8,3.8s1.2,2.2,2.1,3.1c0.9,0.9,1.9,1.6,3.1,2.1s2.5,0.8,3.8,0.8c1.4,0,2.6-0.3,3.8-0.8c1.2-0.5,2.2-1.2,3.1-2.1c0.9-0.9,1.6-1.9,2.1-3.1c0.5-1.2,0.8-2.5,0.8-3.8S387.9,136.5,387.4,135.3z M385.8,142.3c-0.4,1-1,1.9-1.7,2.6c-0.7,0.7-1.6,1.3-2.6,1.7s-2,0.6-3.2,0.6c-1.1,0-2.2-0.2-3.2-0.6c-1-0.4-1.9-1-2.6-1.7s-1.3-1.6-1.7-2.6c-0.4-1-0.6-2-0.6-3.2c0-1.1,0.2-2.2,0.6-3.2s1-1.9,1.7-2.6c0.7-0.7,1.6-1.3,2.6-1.7s2-0.6,3.2-0.6c1.1,0,2.2,0.2,3.2,0.6c1,0.4,1.9,1,2.6,1.7s1.3,1.6,1.7,2.6c0.4,1,0.6,2,0.6,3.2C386.5,140.3,386.2,141.3,385.8,142.3z M380.2,139.9c0.8-0.1,1.4-0.4,1.9-0.9s0.8-1.2,0.8-2.2c0-1.1-0.3-1.9-1-2.5c-0.6-0.6-1.7-0.9-3-0.9h-4.4v11.3h2.1v-4.6h1.5l2.8,4.6h2.2L380.2,139.9z M379.1,138.3c-0.3,0-0.6,0-1,0h-1.5v-3.2h1.5c0.3,0,0.6,0,1,0c0.3,0,0.6,0.1,0.9,0.2c0.3,0.1,0.5,0.3,0.6,0.5s0.2,0.5,0.2,0.9s-0.1,0.7-0.2,0.9c-0.2,0.2-0.4,0.4-0.6,0.5C379.7,138.2,379.4,138.3,379.1,138.3z"
      />
    </svg>
  );
}

function ESALogo() {
  return (
    <Image
      src={esaLogoImg}
      alt="European Space Agency logo"
      width={34}
      height={34}
      style={{ objectFit: "contain" }}
    />
  );
}

function AUASLogo() {
  return (
    <Image
      src={auasLogoImg}
      alt="Amsterdam University of Applied Sciences logo"
      width={34}
      height={34}
      style={{ objectFit: "contain" }}
    />
  );
}

type AffiliationEntry = {
  id: string;
  role: string;
  institute: string;
  period: string;
  logo: ReactNode;
};

const POSITIONS: AffiliationEntry[] = [
  {
    id: "google",
    role: "Research Software Engineer",
    institute: "Google",
    period: "2026 – Present",
    logo: <GoogleLogo />,
  },
  {
    id: "garmite",
    role: "Co-Founder & CEO",
    institute: "Garmite",
    period: "2024 – 2025",
    logo: <GarmiteLogo />,
  },
  {
    id: "intel",
    role: "AI Research Intern",
    institute: "Intel Labs",
    period: "2022",
    logo: <IntelLogo />,
  },
  {
    id: "esa",
    role: "Machine Learning Intern",
    institute: "European Space Agency",
    period: "2019",
    logo: <ESALogo />,
  },
];

const EDUCATION: AffiliationEntry[] = [
  {
    id: "uci",
    role: "Ph.D. in Computer Science",
    institute: "UC Irvine",
    period: "2020 – 2026",
    logo: <UCILogo />,
  },
  {
    id: "auas",
    role: "B.S. in Engineering",
    institute: "Amsterdam UAS",
    period: "2015 – 2019",
    logo: <AUASLogo />,
  },
];

export default function About() {
  return (
    <Section id="trajectory" $wide>
      <TwoColumnGrid>
          <GroupBlock id="experience">
            <SectionHeader title="Experience" />
            <PositionList>
              {POSITIONS.map((item) => (
                <PositionItem key={item.id}>
                  <LogoBadge>{item.logo}</LogoBadge>
                  <PositionText>
                    <InstituteName>{item.institute}</InstituteName>
                    <RoleTitle>{item.role}</RoleTitle>
                  </PositionText>
                  <PeriodText>{item.period}</PeriodText>
                </PositionItem>
              ))}
            </PositionList>
          </GroupBlock>

          <GroupBlock id="education">
            <SectionHeader title="Education" />
            <PositionList>
              {EDUCATION.map((item) => (
                <PositionItem key={item.id}>
                  <LogoBadge>{item.logo}</LogoBadge>
                  <PositionText>
                    <InstituteName>{item.institute}</InstituteName>
                    <RoleTitle>{item.role}</RoleTitle>
                  </PositionText>
                  <PeriodText>{item.period}</PeriodText>
                </PositionItem>
              ))}
            </PositionList>
          </GroupBlock>
      </TwoColumnGrid>
    </Section>
  );
}
