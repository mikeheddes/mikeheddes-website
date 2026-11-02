import styled from "styled-components";

import { contentWrapper } from "../styles";
import {
  PUBLICATIONS,
  PROJECTS,
  PublicationCard,
  ProjectCard,
} from "./post";
import { SectionHeader } from "./section";
import { screen } from "../styles/breakpoints";

const SectionBlock = styled.section<{ $wide?: boolean }>`
  ${contentWrapper};
  padding-top: 30px;
  padding-bottom: 50px;
`;

const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media ${screen.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${screen.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function Feed() {
  return (
    <>
      <SectionBlock id="publications" $wide>
        <SectionHeader
          title="Publications"
        />

        <PublicationsContainer>
          {PUBLICATIONS.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </PublicationsContainer>
      </SectionBlock>

      <SectionBlock id="projects" $wide>
        <SectionHeader
          title="Projects"
        />
        <ProjectsGrid>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </SectionBlock>
    </>
  );
}
