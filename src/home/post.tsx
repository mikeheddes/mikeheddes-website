import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import { fluidFont } from "../styles";

import jetFighterCover from "../blog/jet-fighter/cover.jpg";
import galaxyCover from "../blog/settlers-of-the-galaxy/cover.jpg";
import gridFinCover from "../blog/spacex-grid-fin-design/cover.jpg";
import dcgpCover from "../blog/dcgp/cover.png";
import musicCover from "../blog/music/cover.jpg";
import torchhdLogo from "../assets/torchhd-logo.png";

export type ActionLink = {
  label: string;
  href: string;
};

export type PublicationData = {
  id: string;
  title: string;
  authors: string[];
  year: string;
  venue?: string;
  highlight?: string;
  links: ActionLink[];
};

export type ProjectData = {
  id: string;
  title: string;
  cover: StaticImageData;
  coverAlt?: string;
  href: string;
};

export const PUBLICATIONS: PublicationData[] = [
  {
    id: "duodiscover",
    title:
      "DuoDiscover: Scaling Autonomous Discovery Beyond the Evaluation Bottleneck",
    authors: [
      "Shubham Agarwal",
      "Akshat Gupta",
      "Mike Heddes",
      "Dilara Soylu",
      "Rui Meng",
      "Patrick Tser Jern Kon",
      "Jiefeng Chen",
      "Mert Cemri",
      "Shu Liu",
      "Abe Gonzalez",
      "Akanksha Jain",
      "Bhavana Dalvi Mishra",
      "Linfeng Song",
      "Vilobh Meshram",
      "Xiangru Tang",
      "Jinsung Yoon",
      "Aditya Parameswaran",
      "Ion Stoica",
      "Vahab Mirrokni",
      "Burak Gokturk",
      "Parthasarathy Ranganathan",
      "Tomas Pfister",
      "Nanyun Peng",
      "Chun-Liang Li",
    ],
    year: "2026",
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2610.17184" }],
  },
  {
    id: "tensor-contraction-sketches",
    title: "Approximating Tensor Network Contraction with Sketches",
    authors: ["Mike Heddes", "Igor Nunes", "Tony Givargis", "Alex Nicolau"],
    year: "2026",
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2603.07387" }],
  },
  {
    id: "dissertation",
    title:
      "Approximation Algorithms for Similarity Measures and Tensor Contractions",
    authors: ["Mike Heddes"],
    year: "2026",
    venue: "University of California, Irvine, 2026",
    links: [
      {
        label: "Dissertation",
        href: "https://escholarship.org/uc/item/3wc3x7m0",
      },
    ],
  },
  {
    id: "deep-cross-attention",
    title: "DeepCrossAttention: Supercharging Transformer Residual Connections",
    authors: [
      "Mike Heddes",
      "Adel Javanmard",
      "Kyriakos Axiotis",
      "Gang Fu",
      "MohammadHossein Bateni",
      "Vahab Mirrokni",
    ],
    year: "2025",
    venue: "International Conference on Machine Learning (ICML), 2025",
    links: [
      {
        label: "Publication",
        href: "https://arxiv.org/abs/2502.06785",
      },
    ],
  },
  {
    id: "guided-stochastic-exploration",
    title:
      "Always-Sparse Training by Growing Connections with Guided Stochastic Exploration",
    authors: [
      "Mike Heddes",
      "Narayan Srinivasa",
      "Tony Givargis",
      "Alexandru Nicolau",
    ],
    year: "2025",
    venue: "International Joint Conference on Neural Networks (IJCNN), 2025",
    links: [
      { label: "Publication", href: "https://arxiv.org/abs/2401.06898" },
      {
        label: "Code",
        href: "https://github.com/mikeheddes/guided-stochastic-exploration",
      },
    ],
  },
  {
    id: "hdc-journal",
    title:
      "Hyperdimensional Computing: A Framework for Stochastic Computation and Symbolic AI",
    authors: [
      "Mike Heddes",
      "Igor Nunes",
      "Tony Givargis",
      "Alexandru Nicolau",
      "Alex Veidenbaum",
    ],
    year: "2024",
    venue: "Journal of Big Data, 2024",
    links: [
      {
        label: "Publication",
        href: "https://link.springer.com/article/10.1186/s40537-024-01010-8",
      },
    ],
  },
  {
    id: "fast-multi-join-sketch",
    title:
      "Convolution and Cross-Correlation of Count Sketches Enables Fast Cardinality Estimation of Multi-Join Queries",
    authors: ["Mike Heddes", "Igor Nunes", "Tony Givargis", "Alex Nicolau"],
    year: "2024",
    venue: "International Conference on Management of Data (SIGMOD), 2024",
    links: [
      { label: "Publication", href: "https://arxiv.org/abs/2402.15953" },
      {
        label: "Code",
        href: "https://github.com/mikeheddes/fast-multi-join-sketch",
      },
    ],
  },
  {
    id: "dothash",
    title:
      "DotHash: Estimating Set Similarity Metrics for Link Prediction and Document Deduplication",
    authors: [
      "Igor Nunes",
      "Mike Heddes",
      "Pere Vergés",
      "Danny Abraham",
      "Alexander Veidenbaum",
      "Alexandru Nicolau",
      "Tony Givargis",
    ],
    year: "2023",
    venue: "Conference on Knowledge Discovery and Data Mining (KDD), 2023",
    links: [
      { label: "Publication", href: "https://arxiv.org/abs/2305.17310" },
      { label: "Code", href: "https://github.com/mikeheddes/dothash" },
    ],
  },
  {
    id: "torchhd",
    title:
      "Torchhd: An Open Source Python Library to Support Research on Hyperdimensional Computing and Vector Symbolic Architectures",
    authors: [
      "Mike Heddes",
      "Igor Nunes",
      "Pere Vergés",
      "Denis Kleyko",
      "Danny Abraham",
      "Tony Givargis",
      "Alexandru Nicolau",
      "Alexander Veidenbaum",
    ],
    year: "2023",
    venue: "Journal of Machine Learning Research (JMLR), 2023",
    links: [
      {
        label: "Publication",
        href: "https://arxiv.org/abs/2205.09208",
      },
      {
        label: "Code",
        href: "https://github.com/hyperdimensional-computing/torchhd",
      },
    ],
  },
  {
    id: "circular-hv",
    title:
      "An Extension to Basis-Hypervectors for Learning from Circular Data in Hyperdimensional Computing",
    authors: [
      "Igor Nunes",
      "Mike Heddes",
      "Tony Givargis",
      "Alexandru Nicolau",
    ],
    year: "2023",
    venue: "Design Automation Conference (DAC), 2023",
    links: [{ label: "Publication", href: "https://arxiv.org/abs/2205.07920" }],
  },
  {
    id: "hd-hashing",
    title:
      "Hyperdimensional Hashing: An Efficient and Robust Dynamic Hash Table",
    authors: [
      "Mike Heddes",
      "Igor Nunes",
      "Tony Givargis",
      "Alexandru Nicolau",
      "Alex Veidenbaum",
    ],
    year: "2022",
    venue: "Design Automation Conference (DAC), 2022",
    links: [{ label: "Publication", href: "https://arxiv.org/abs/2205.07850" }],
  },
  {
    id: "graphhd",
    title:
      "GraphHD: Efficient Graph Classification using Hyperdimensional Computing",
    authors: [
      "Igor Nunes",
      "Mike Heddes",
      "Tony Givargis",
      "Alexandru Nicolau",
      "Alex Veidenbaum",
    ],
    year: "2022",
    venue: "Design, Automation and Test in Europe Conference (DATE), 2022",
    highlight: "Best Paper Award Nomination",
    links: [{ label: "Publication", href: "https://arxiv.org/abs/2205.07826" }],
  },
  {
    id: "edge-avatar",
    title: "EdgeAvatar: An Edge Computing System for Building Virtual Beings",
    authors: [
      "Neftali Watkinson",
      "Fedor Zaitsev",
      "Aniket Shivam",
      "Michael Demirev",
      "Mike Heddes",
      "Tony Givargis",
      "Alexandru Nicolau",
      "Alexander Veidenbaum",
    ],
    year: "2021",
    venue: "Electronics, 2021",
    links: [
      {
        label: "Publication",
        href: "https://doi.org/10.3390/electronics10030229",
      },
      {
        label: "Application",
        href: "https://sysarch-uci.gitlab.io/celan-web/",
      },
    ],
  },
  {
    id: "bachelor-thesis",
    title: "Differentiable Cartesian Genetic Programming as a Service",
    authors: ["Mike Heddes"],
    venue: "Amsterdam University of Applied Sciences, 2019",
    year: "2019",
    links: [
      { label: "Thesis", href: "/bachelor-thesis.pdf" },
      { label: "Code", href: "https://github.com/esa/dcgp-web" },
      { label: "Application", href: "https://esa.github.io/dcgp-web" },
    ],
  },
];

export const PROJECTS: ProjectData[] = [
  {
    id: "torchhd",
    title: "Torchhd",
    cover: torchhdLogo,
    coverAlt: "Torchhd Logo",
    href: "https://github.com/hyperdimensional-computing/torchhd",
  },
  {
    id: "jet-fighter-ai",
    title: "Jet Fighter AI",
    cover: jetFighterCover,
    coverAlt: "Jet Fighter AI simulation",
    href: "/post/jet-fighter-ai",
  },
  {
    id: "settlers-of-the-galaxy",
    title: "Settlers of the Galaxy",
    cover: galaxyCover,
    coverAlt: "Settlers of the Galaxy 3D visualization",
    href: "/post/settlers-of-the-galaxy",
  },
  {
    id: "spacex-grid-fin-design",
    title: "SpaceX Grid Fin",
    cover: gridFinCover,
    coverAlt: "SpaceX Titanium Grid Fin 3D model",

    href: "/post/spacex-grid-fin-design",
  },
  {
    id: "dcgp",
    title: "Differentiable Cartesian Genetic Programming",
    cover: dcgpCover,
    coverAlt: "dCGP Web Playground",
    href: "https://esa.github.io/dcgp-web",
  },
  {
    id: "music-production",
    title: "Discography",
    cover: musicCover,
    coverAlt: "Mike Heddes Discography",
    href: "/music",
  },
];

const PubItemWrapper = styled.article`
  padding: 30px 0;
  border-bottom: 1px solid var(--border-content);

  &:first-child {
    padding-top: 0px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }
`;

const PubBadgesRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  ${fluidFont(14, 14)};
  font-weight: 700;
  text-transform: uppercase;
  color: var(--orange);
`;

const PubMainColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const PubTitle = styled.h4`
  color: var(--heading);
  font-weight: 700;
  ${fluidFont(20, 21)};
  margin: 0;
  line-height: 1.32;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 120ms ease;

    &:hover {
      color: var(--primary);
    }
  }
`;

const PubVenue = styled.div`
  color: var(--text-obvious);
  font-weight: 500;
  ${fluidFont(18, 18)};
  margin-top: 5px;
  line-height: 1.4;
`;

const PubAuthors = styled.p`
  color: var(--text-subtle);
  font-weight: 400;
  ${fluidFont(16, 16)};
  margin-top: 5px;
  line-height: 1.62;
`;

const ActionLinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 14px;
`;

const ActionChip = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function PublicationCard({ pub }: { pub: PublicationData }) {
  return (
    <PubItemWrapper>
      <PubMainColumn>
        {pub.highlight && (
          <PubBadgesRow>
            <Highlight>{pub.highlight}</Highlight>
          </PubBadgesRow>
        )}
        <PubTitle>{pub.title}</PubTitle>
        {pub.venue && <PubVenue>{pub.venue}</PubVenue>}
        {pub.authors && <PubAuthors>{pub.authors.join(", ")}</PubAuthors>}
        <ActionLinksRow>
          {pub.links.map((link) => (
            <ActionChip key={link.href} href={link.href}>
              {link.label} ⟶
            </ActionChip>
          ))}
        </ActionLinksRow>
      </PubMainColumn>
    </PubItemWrapper>
  );
}

const ProjectCardContainer = styled.article``;

const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background-color: var(--surface);
  overflow: hidden;
  border-radius: 8px;

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
    border-radius: 8px;
  }
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
`;

const ProjectTitle = styled.h4`
  color: var(--heading);
  ${fluidFont(20, 21)};
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

const ProjectLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  margin-top: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <ProjectCardContainer>
      {project.cover && (
        <Link href={project.href}>
          <CoverWrapper>
            <Image
              src={project.cover}
              alt={project.coverAlt ?? project.title}
              fill
              sizes="(min-width: 960px) 480px, 100vw"
              style={{ objectFit: "cover" }}
            />
          </CoverWrapper>
        </Link>
      )}
      <ProjectBody>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectLink href={project.href}>
          View project ⟶
        </ProjectLink>
      </ProjectBody>
    </ProjectCardContainer>
  );
}
